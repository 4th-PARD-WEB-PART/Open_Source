import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profiles';
import Articles from './Pages/Articles';
import Article from './Pages/Article';
import Layout from './Layout';
import {useEffect, useState} from 'react';
import MyPage from './Pages/MyPage';
import Login from './Pages/Login';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            alert("로그인이 필요합니다.");
            navigate("/login");
        }
    }, []);
    
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/profiles/:username" element={<Profile/>}/>
                <Route path="/articles" element={<Articles/>}>
                    <Route path=":id" element={<Article/>}/>
                </Route>
                <Route
                    path="/mypage"
                    element={<MyPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} navigate={navigate} />}
                />
            </Route>
            <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} navigate={navigate} />}
            />
        </Routes>
    );
}

export default App;
