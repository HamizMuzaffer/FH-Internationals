import CountUp from "react-countup"

interface props{
    containerStyles: string,
    icon: any,
    endCountNum: number,
    endCountText: string
    badgeText: string
}
export const Badge = ({containerStyles,icon,endCountNum,endCountText,badgeText}:props) => {
  return (
    <div className={`${containerStyles}`} id="badge">
      <div className="text-3xl text-primary ">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-3xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4}/>
           {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px]">{badgeText}</div>
      </div>
    </div>
  )
}