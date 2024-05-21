'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';
import { IdeaCard } from './ideaCard';
export function InputWithButton() {
  const [text, setText] = useState('');
  const [struc_data, setStrucData] = useState([]);

  const handleSubmit = async () => {
    const response = await fetch('/api/mess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (response.ok) {
      let data_arr = JSON.parse(data.ideas);
      setStrucData(data_arr.cards);
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <div className="vertical-flex w-full items-center">
      <div className="max-w-xl">
      <Textarea placeholder="Type your interests here" value={text} onChange={(e) => setText(e.target.value)} />
      <Button className="mt-[10px]" type="submit" onClick={handleSubmit}>Search</Button>
      </div>
      <div className="grid grid-cols-3 gap-4 items-start justify-start mt-[20px]">
      {struc_data.map((item, index) => (
        <IdeaCard key={index} title={item.title} description={item.description} badge={item.label} />
      ))}
    </div>
    </div>
  )
}