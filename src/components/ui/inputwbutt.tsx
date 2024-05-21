'use client'
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';
import { IdeaCard } from './ideaCard';
import { LoadingButton } from '@/components/ui/spinButton';
import { Skeleton } from "@/components/ui/skeleton"
import { ExploreCard } from "./exploreCard";

export function InputWithButton() {
  const [text, setText] = useState('');
  const [button_text, updateButton] = useState('Search');
  const [button_load, updateLoad] = useState('');
  const [struc_data, setStrucData] = useState([]);
  const [explore_data, setExploreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      alert('Failed to search for ideas');
    }
  };

  const handleCardClick = async (cardData) => {
    setIsLoading(true);
    const response = await fetch('/api/card-explore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardData),
    });
    const data = await response.json();
    if (response.ok) {
      setIsLoading(false);
      let explore_arr = JSON.parse(data.explore);
      setExploreData(explore_arr.ideas);      
    } else {
      alert('Failed to explore idea');
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
      <div className="w-1/2.3 flex gap-4 items-start justify-start mt-[20px]">
        <div className="flex flex-col max-w-[700px]">
          {struc_data.map((item, index) => (
            <IdeaCard key={index} title={item.title} description={item.description} badge={item.label} onClick={() => handleCardClick(item)} />
          ))}
        </div>
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[55px] w-[350px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[350px]" />
              <Skeleton className="h-4 w-[300px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
        ) : (
          <div>
            {explore_data.map((item, index) => (
              <ExploreCard 
                key={index} 
                title={item.title} 
                problem={item.problem} 
                description={item.description} 
                unique_value_proposition={item.unique_value_proposition} 
                competing_companies={item.competing_companies} 
                b2b_or_b2c={item.b2b_or_b2c} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}