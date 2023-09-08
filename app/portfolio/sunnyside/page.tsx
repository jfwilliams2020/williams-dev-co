import Image from "next/image";
import TestimonialCard from "./_components/testimonial-card";

export default function Sunnyside() {
  return (
    <main className="font-barlow text-lg">
      <div className="h-[90vh] bg-hero bg-cover bg-bottom">
        <div className="flex p-6 items-center text-white">
          <div className="font-semibold flex-auto text-4xl">
            <a href="#">sunnyside</a>
          </div>
          <div className="flex space-x-10 items-center">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <button className="font-fraunces text-black bg-white px-6 py-4 rounded-full">CONTACT</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center p-32">
          <div className="space-y-6">
            <div className="text-4xl font-bold font-fraunces">
              Transform your brand
            </div>
            <div className="text-body">
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
            </div>
            <a href="#" className="font-bold font-fraunces relative inline-block">
              <div className="p-1">
                LEARN MORE
              </div>
              <div className="rounded-full h-2 w-full bg-[#fad400] opacity-30 absolute bottom-1.5 -z-10"></div>
            </a>
          </div>
        </div>
        <div className="bg-[url('/images/desktop/image-transform.jpg')] w-full h-full bg-cover bg-center" />
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-[url('/images/desktop/image-stand-out.jpg')] w-full h-full bg-cover bg-center" />
        <div className="flex items-center justify-center p-32">
          <div className="space-y-6">
            <div className="font-fraunces text-4xl font-bold">
              Stand out to the right audience
            </div>
            <div className="text-body">
              Using a collaborative forumula of designers, researchers, photographers, videographers, and copywriters, we{"'"}ll
              build and extend your brand in digital places.
            </div>
            <a href="#" className="font-fraunces font-bold relative inline-block">
              <div className="p-1">
                LEARN MORE
              </div>
              <div className="rounded-full h-2 w-full bg-[#fe7867] opacity-30 absolute bottom-1.5 -z-10"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="p-32">
        <div className="text-center font-fraunces text-xl font-[900] tracking-widest text-[#a7abae] mb-16">
          CLIENT TESTIMONIALS
        </div>
        <div className="grid grid-cols-3 gap-10">
          <TestimonialCard 
            imageUrl="/images/image-emily.jpg"
            content="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            authorName="Emily R."
            authorTitle="Marketing Director"
          />
          <TestimonialCard
            imageUrl="/images/image-thomas.jpg"
            content="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
            authorName="Thomas S."
            authorTitle="Chief Operating Officer"
          />
          <TestimonialCard
            imageUrl="/images/image-jennie.jpg"
            content="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            authorName="Jennie F."
            authorTitle="Business Owner"
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="h-96 relative">
          <Image 
            alt="Milk bottles"
            src="/images/desktop/image-gallery-milkbottles.jpg"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div className="h-96 relative">
          <Image 
            alt="Orange"
            src="/images/desktop/image-gallery-orange.jpg"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div className="h-96 relative">
          <Image 
            alt="Waffle cone"
            src="/images/desktop/image-gallery-cone.jpg"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
        <div className="h-96 relative">
          <Image 
            alt="Sugar cubes"
            src="/images/desktop/image-gallery-sugarcubes.jpg"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      </div>
      <div className="p-12 bg-[#458c7e] bg-opacity-50 text-center text-[#25564b] space-y-12">
        <div className="font-semibold flex-auto text-4xl">
          <a href="#">sunnyside</a>
        </div>
        <div className="text-[#458c7e] flex space-x-10 items-center justify-center">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
        </div>
        <div className="flex space-x-4 items-center justify-center">
          <a href="#">
            <Image 
              src="/images/icon-facebook.svg"
              height={16}
              width={16}
              alt="Facebook"
            />
          </a>
          <a href="#">
            <Image 
              src="/images/icon-instagram.svg"
              height={16}
              width={16}
              alt="Instagram"
            />
          </a>
          <a href="#">
            <Image 
              src="/images/icon-twitter.svg"
              height={16}
              width={16}
              alt="Twitter"
            />
          </a>
          <a href="#">
            <Image 
              src="/images/icon-pinterest.svg"
              height={16}
              width={16}
              alt="Pintereset"
            />
          </a>
        </div>
      </div>
    </main>
  )
}