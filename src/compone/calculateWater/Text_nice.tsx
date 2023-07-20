import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

const Text_nice = () => {
  const [weight, setWeight] = useState<number >(0); //รับมาคำนวณ
  const [displayText, setDisplayText] = useState<number >(0); //สร้างไวรับคำตอบ

  const calculateWater = () => { //สูตรคำนวณ
    if (weight !== 0) {
      const weightIg = weight * 2.2;
      const weightIn2 = weightIg * 30;
      const end = weightIn2 / 2;
      setDisplayText(end);
      console.log('BMI:', end);
    } else { //ถ้าว่างจะให้ค่าเป็น 0
      const erro = 0;
      setDisplayText(erro);
    }
  };

  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => { //รับค่าจากคีบอด
    const value = event.target.value;
    const numericValue = parseFloat(value); //  parseFloat เเปลง Str-num
  setWeight(numericValue);
  };

  return (
    <div>
      <h1>ควรดื่มน้ำวันละเท่าไร?</h1>
      <h2>{displayText} มล.</h2>
      <Stack direction={'row'} spacing={2}  >
        <label  >ส่วนสูงของคุณ  </label>
        <TextField
          type="number"
          id="filled-basic"
          label="ส่วนสูงของคุณ (CM)"
          variant="outlined"
          sx={{ width: '300px', marginBottom: '16px' }}
          value={weight}
          onChange={handleWeightChange}
        />
        <Button variant="contained" onClick={calculateWater} sx={{ marginTop: '16px' }}>
          คำนวณ BMI
        </Button>
      </Stack>
    </div>
  );
};

export default Text_nice;
