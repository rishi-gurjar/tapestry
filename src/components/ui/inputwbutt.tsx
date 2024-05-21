'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';
import { IdeaCard } from './ideaCard';
import { LoadingButton } from '@/components/ui/spinButton';

export function InputWithButton() {
  const [text, setText] = useState('');
  const [button_text, updateButton] = useState('Search');
  const [button_load, updateLoad] = useState('');
  const [struc_data, setStrucData] = useState([]);

  const handleSubmit = async () => {
    updateButton('Searching');
    updateLoad("loading");
    const response = await fetch('/api/mess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (response.ok) {
      updateButton('Search');
      updateLoad('');
      let data_arr = JSON.parse(data.ideas);
      setStrucData(data_arr.cards);
    } else {
      alert('Failed to send message');
    }
  };
  // grid-cols-3 for grid view 
  return (
    <div className="vertical-flex w-full items-center">
      <div className="max-w-xl">
      <Textarea placeholder="Type your interests here" value={text} onChange={(e) => setText(e.target.value)} />
      {/* <Button className="mt-[10px]" type="submit" onClick={handleSubmit}>Search</Button> */}
      <LoadingButton className="mt-[10px]" variant="secondary" type="submit" loading={button_load} onClick={handleSubmit} >{button_text}</LoadingButton>
      </div>
      <div className="w-1/3 grid gap-4 items-start justify-start mt-[20px]">
      {struc_data.map((item, index) => (
        <IdeaCard key={index} title={item.title} description={item.description} badge={item.label} />
      ))}
      </div>    
    </div>
  )
}