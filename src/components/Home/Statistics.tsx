export default function Statistics() {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          <div className="flex items-center gap-4 fade-in">
            <div className="text-6xl font-bold text-[#fbc710]">
              <span data-end-value="10">10</span>
            </div>
            <div className="text-base font-bold uppercase">
              YEARS OF <br /> EXPERIENCE
            </div>
          </div>

          <div className="flex items-center gap-4 fade-in fade-in-delay-1">
            <div className="text-6xl font-bold text-[#fbc710]">
              <span data-end-value="43k+">43k+</span>
            </div>
            <div className="text-base font-bold uppercase">CUSTOMERS</div>
          </div>

          <div className="flex items-center gap-4 fade-in fade-in-delay-2">
            <div className="text-6xl font-bold text-[#fbc710]">
              <span data-end-value="20+">20+</span>
            </div>
            <div className="text-base font-bold uppercase">SPECIALISTS</div>
          </div>
        </div>
      </div>
    </div>
  )
}
