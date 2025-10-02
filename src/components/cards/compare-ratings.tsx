import { Card, CardContent } from '../ui/card'
import { Star, StarHalf } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function CompareRatings() {
  return (
         <Card className="border-none shadow-none w-full p-0 m-0  min-h-[8.5rem] rounded-none rounded-t-2xl">
            <CardContent className="pt-8">
              <div className="flex flex-wrap justify-around gap-8 items-center">
                <div className="order-3 lg:order-1">
                  <h3 className="text-[1.25rem] font-bold text-[#282529] mb-2">
                    Clikpick is your trusted tool!
                  </h3>
                  <p className="text-[0.75rem] text-[#282529]">
                    Round the clock verified and supervised verified
                    <br />
                    answers via our IIT Testers.
                  </p>
                </div>

                {/* =============================================== */}
                <div className="text-center w-fit start-0 order-2 lg:order-2">
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4].map((star) => (
                      <span key={star} className="w-[53px]">
                        <Star fill="#FBAD33" stroke="#FBAD33" size={43} />
                      </span>
                    ))}
                    <div className="relative w-11">
                      <span className="absolute top-0 left-0  z-0">
                        <Star fill="#D3DAD9" stroke="#D3DAD9" size={43} />
                      </span>

                      <span className="absolute top-0 left-0  z-10">
                        <StarHalf fill="#FBAD33" stroke="#FBAD33" size={43} />
                      </span>
                    </div>
                  </div>
                  <p className="text-[0.63rem] text-[#282529]">
                    Google Review Rating
                  </p>
                </div>
                {/* ======================================== */}

                <div className="flex justify-center gap-14 order-2 lg:order-3">
                  <div className="text-center">
                    <Badge
                      variant="outline"
                      className="text-[1.5rem] font-bold text-theme border-0 mb-1"
                    >
                      150+
                    </Badge>
                    <p className="text-[0.63rem] text-[#282529]">
                      Verified Programs
                    </p>
                  </div>

                  <div className="text-center">
                    <Badge
                      variant="outline"
                      className="text-[1.5rem] font-bold text-theme border-0 mb-1"
                    >
                      100+
                    </Badge>
                    <p className="text-[0.63rem] text-[#282529]">
                      Recognized Universities
                    </p>
                  </div>

                  <div className="text-center ">
                    <Badge
                      variant="outline"
                      className="text-[1.5rem] font-bold text-theme border-0 mb-1"
                    >
                      95%
                    </Badge>
                    <p className="text-[0.63rem] text-[#282529]">
                      of students who strongly believe in signing
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
  )
}
