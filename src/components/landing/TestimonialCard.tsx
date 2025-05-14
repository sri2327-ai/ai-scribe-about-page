
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { shadowStyles } from "@/lib/shadow-utils";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
  image: string;
}

export const TestimonialCard = ({ quote, author, role, organization, image }: TestimonialCardProps) => {
  return (
    <Card className={cn(
      "p-6 bg-white border border-gray-100 rounded-xl max-w-2xl mx-auto transition-all duration-300 hover:-translate-y-1",
      shadowStyles.testimonial
    )}>
      <blockquote className="text-gray-700 italic text-lg mb-6">{quote}</blockquote>
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 border-2 border-[#387E89]/30 shadow-md">
          <AvatarImage src={image} alt={author} />
          <AvatarFallback className="bg-[#387E89]/10 text-[#387E89]">
            {author.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
          <p className="text-sm text-gray-500">{organization}</p>
        </div>
      </div>
    </Card>
  );
};
