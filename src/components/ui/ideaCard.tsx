import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface IdeaCardProps {
  title: string;
  description: string;
  badge: string;
  onClick: () => void; 
}

export function IdeaCard({ title, description, badge, onClick}: IdeaCardProps) {
  return (
    <Card onClick={onClick}>
      <CardHeader>
        <div>
        <CardTitle>{title}</CardTitle>
        <Badge>{badge}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}