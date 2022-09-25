import NavBar from './components/NavBar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export default function Gender() {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        
        navigate('/Career');
      };
    return (
        <div className='gender-content'>
            <NavBar/>   
            <img src =  "../images/choose.gif" className='gender-gif'/>
            <div className='gender-button'>
                <Button variant="danger" onClick={navigateHome}>Female</Button>
                <Button variant="danger" onClick={navigateHome}>Male</Button>
            </div>
            
        </div>
        
    )
}