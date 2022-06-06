import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { chakra, ChakraProps, Flex, IconButton, ResponsiveValue, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

type IScrollSnapWrapperProps = {
  children: React.ReactNode;
  hideArrowsOnDesktop?: boolean;
} & ChakraProps;

const ScrollButton = chakra(IconButton, {
  baseStyle: {
    position: "absolute",
    zIndex: "1",
    backgroundColor: "white",
    color: "brand.500",
    _hover: {
      backgroundColor: "brand.100",
    }
    //transform: "translateY(-50%)"
  }
})

const ScrollSnapWrapper = ({ children, hideArrowsOnDesktop, ...props }: IScrollSnapWrapperProps) => {
  const isArrowVisible = useBreakpointValue({ base: "visible", lg: hideArrowsOnDesktop ? "hidden" : "visible" }) as ResponsiveValue<any>;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnBackwardRef = useRef<HTMLButtonElement>(null);
  const btnForwardRef = useRef<HTMLButtonElement>(null);
  
  const handleScrollBackward = () => {
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollBy({
      left: -5,
      behavior: "smooth"
    });
  }

  const handleScrollForward = () => {
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollBy({
      left: 5,
      behavior: "smooth"
    });
  }

  const recalculateScrollButtonsPositions = () => {
    if (
      !btnForwardRef.current || 
      !btnBackwardRef.current ||
      !wrapperRef.current
    ) return;
    
    const wrapperData = wrapperRef.current.getBoundingClientRect();
    const fwrdData    = btnForwardRef.current.getBoundingClientRect();
  
    const topPosition = wrapperRef.current.offsetTop + (wrapperData.height / 2);
    const frwdLeftPosition = wrapperData.right - (fwrdData.width / 2);    
    const bkwdLeftPosition = wrapperData.left - (fwrdData.width / 2);
  
    btnForwardRef.current.style.left = `${frwdLeftPosition}px`;
    btnForwardRef.current.style.top = `${topPosition}px`;
    btnBackwardRef.current.style.left = `${bkwdLeftPosition}px`;
    btnBackwardRef.current.style.top = `${topPosition}px`;
  }

  useEffect(() => {
    recalculateScrollButtonsPositions();
    window.addEventListener("resize", recalculateScrollButtonsPositions);

    return () => window.removeEventListener("resize", recalculateScrollButtonsPositions);
  }, []);

  return (
    <>
      <ScrollButton visibility={isArrowVisible} shadow={"dark-lg"} size={"lg"} ref={btnBackwardRef} onClick={handleScrollBackward}>
        <ArrowBackIcon />
      </ScrollButton>

      <ScrollButton visibility={isArrowVisible} shadow={"dark-lg"} size={"lg"} ref={btnForwardRef} onClick={handleScrollForward}>
        <ArrowForwardIcon />
      </ScrollButton>

      <Flex {...props} ref={wrapperRef} position={"relative"} overflowX={"hidden"} scrollSnapType={"x mandatory"}>
        { children }
      </Flex>
    </>
  )
}

export default ScrollSnapWrapper;