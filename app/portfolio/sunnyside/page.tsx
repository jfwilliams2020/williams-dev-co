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
    </main>
  )
}