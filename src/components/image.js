export default function Image(props){
    const {mini, small, large, huge, src, className, alt, object = "object-cover" } = props;
    let size = "w-[197px] h-[157px]";
    let classes = "rounded-3xl md:select-all select-none";

    if(mini) size = "w-[107px] h-[118px]";
    if(small) size = "w-[110px] h-[125px]";
    if(large) size = "w-[256px] h-[220px]";
    if(huge) size = "w-[305px] h-[438px]";

    classes += " " + size;

    if(className) classes += " " + className;
    classes += " " + object;

    return (
        <>
            <img src={src} alt={alt} className={classes} />
        </>
    )
}