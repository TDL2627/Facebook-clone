import Image from "next/image"
function SidebarRow({src,Icon, title}){
    return(
<div className="flex items-center space-x-2 p-4">
    {src && (
  <Image
  className="rounded-full cursor-pointer"
  src={src}
  width={30}
  height={30}
  layout="fixed"
  />
    )}
    {Icon &&  <Icon className="h-8 w-8 text-blue-500 cursor-pointer"/>}
    <p className="hidden sm:inline-flex font-medium cursor-pointer">{title}</p>

</div>
    )
}
export default SidebarRow