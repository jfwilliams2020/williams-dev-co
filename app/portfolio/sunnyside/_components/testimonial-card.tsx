import Image from "next/image"

interface TestimonialCardProps {
  imageUrl: any
  content: string
  authorName: string
  authorTitle: string
}

export default function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="flex flex-col text-center justify-between">
      <div className="flex flex-col items-center space-y-10">
        <div className="h-20 aspect-square relative">
          <Image 
            alt={props.authorName}
            src={props.imageUrl}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "100%"
            }}
          />
        </div>
        <div className="text-body">{props.content}</div>
      </div>
      <div className="space-y-1 mt-10">
        <div className="font-fraunces">{props.authorName}</div>
        <div className="text-[#a7abae] text-sm">{props.authorTitle}</div>
      </div>
    </div>
  )
}
