import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface ExploreCardProps {
    title: string;
    description: string;
    problem: string;
    unique_value_proposition: string;
    competing_companies: string;
    b2b_or_b2c: string;
}

export function ExploreCard({ title, description, problem, unique_value_proposition, competing_companies, b2b_or_b2c}: ExploreCardProps) {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <div className="space-y-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <Badge>{b2b_or_b2c}</Badge>
        </div>
        <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Problem</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{problem}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Solution</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Unique Value Proposition</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{unique_value_proposition}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Competing Companies</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{competing_companies}</p>
            </div>
        </div>
      </CardHeader>
    </Card>
  )
}
