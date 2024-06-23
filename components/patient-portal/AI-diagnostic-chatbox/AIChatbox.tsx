import { useState } from 'react';
import { model } from '../../../utils/geminiAPI';

const AIChatbox = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await model.generateContent(input);
    const response = await result.response;
    const text = response.text();
    setOutput(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
      <p>{output}</p>
    </form>
  );
};

export default AIChatbox;
