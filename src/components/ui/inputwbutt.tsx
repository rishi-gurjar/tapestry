'use client'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';

export function InputWithButton() {
  const [text, setText] = useState('');
  const [interests, setInterests] = useState('temp');

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
      console.log(data.ideas)
      setInterests(data.ideas);
    } else {
      alert('Failed to send message');
    }
  };

  return (
    <div className="vertical-flex w-full max-w-xl items-center">
      <Textarea placeholder="Type your interests here" value={text} onChange={(e) => setText(e.target.value)} />
      <Button className="mt-[10px]" type="submit" onClick={handleSubmit}>Search</Button>
      <h3>{interests}</h3>
    </div>
  )
}