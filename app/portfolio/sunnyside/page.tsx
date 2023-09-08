export default function Sunnyside() {
  return (
    <main>
      <div className="h-[90vh] bg-hero bg-cover bg-bottom">
        <div className="flex p-6 items-center text-white">
          <div className="font-bold flex-auto text-4xl">sunnyside</div>
          <div className="flex space-x-4 items-center">
            <div>About</div>
            <div>Services</div>
            <div>Projects</div>
            <button className="text-black bg-white px-6 py-4 rounded-full">CONTACT</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center p-32">
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              Transform your brand
            </div>
            <div>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients
              through compelling visuals that do most of the marketing for you.
            </div>
            <button className="font-bold relative">
              <div className="p-1">
                LEARN MORE
              </div>
              <div className="rounded-full h-2 w-full bg-red-100 absolute bottom-1.5 -z-10"></div>
            </button>
          </div>
        </div>
        <div className="bg-[url('/images/desktop/image-transform.jpg')] w-full h-full bg-cover bg-center" />
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-[url('/images/desktop/image-stand-out.jpg')] w-full h-full bg-cover bg-center" />
        <div className="flex items-center justify-center p-32">
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              Stand out to the right audience
            </div>
            <div>
              Using a collaborative forumula of designers, researchers, photographers, videographers, and copywriters, we{"'"}ll
              build and extend your brand in digital places.
            </div>
            <button className="font-bold relative">
              <div className="p-1">
                LEARN MORE
              </div>
              <div className="rounded-full h-2 w-full bg-red-100 absolute bottom-1.5 -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}