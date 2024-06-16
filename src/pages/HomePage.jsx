import { useNavigate } from 'react-router-dom';
import SectionCenter from '../ui/SectionCenter';
import Title from '../ui/Title';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useState } from 'react';

const HomePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem('userName', name);
    navigate('/selection');
  };

  return (
    <SectionCenter>
      <Title as='h1'>你是誰?</Title>
      <Input 
        placeholder='要如何稱呼您?????' 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleClick}>輸入完成</Button>
    </SectionCenter>
  );
};

export default HomePage;
