import {
    Box,
    Button,
    Heading,
    VStack,
    Switch,
    HStack,
    Code,
    Text,
} from "@chakra-ui/react";
import { ColorModeToggle } from "../components/color-mode-toggle";
import { FaLightbulb } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import {
    RiLightbulbLine,
    RiLightbulbFlashFill,
} from "react-icons/ri";
import { loadHook, Singleton } from "../utils/lattice-design";

const useLight = Singleton(false);

export default function Page() {
    const [light] = useLight();

    return (
        <Box
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100vw"}
            h={"100vh"}
        >
            <Bulbs />

            <VStack>
                <Logo />
                <Controls />
                <Code
                    transition={"all ease 0.5s"}
                    backgroundColor={
                        light ? "white" : "black"
                    }
                    color={"black"}
                    fontSize={"0.8rem"}
                    px={"1.4rem"}
                    py={"0.4rem"}
                    borderRadius={"0.7rem"}
                    my={"1rem"}
                    fontWeight={"500"}
                >
                    {`npm i lattice-design`}
                </Code>
            </VStack>
        </Box>
    );
}

function Logo() {
    const [light] = useLight();
    return (
        <Heading
            textShadow={
                light ? "0px 0px 10px white" : "none"
            }
            // color={light ? "cyan.100" : "none"}
            transition={"all ease 0.3s"}
            fontWeight={400}
            letterSpacing={"0.5rem"}
            size={"5xl"}
            mb={"1rem"}
            // mt={"-1rem"}
        >
            Lattice Design
        </Heading>
    );
}

function Controls() {
    const [light, setLight] = useLight();
    const [title, setTitle] = loadHook("useTitle");

    const handleLightChange = (e) => {
        setLight(e.checked);
        setTitle(e.checked ? "Lattice Design - Try it out!" : "Lattice Design");
    };
    return (
        <HStack>
            {/* <Text color={"yellow.300"}>
                <SlEnergy style={{ fontSize: "1.4rem" }} />
            </Text> */}
            <Switch.Root
                size={"sm"}
                checked={light}
                onCheckedChange={handleLightChange}
            >
                <Switch.HiddenInput />
                <Switch.Control />
                <Switch.Label />
            </Switch.Root>
            {/* {light ? (
                <Text color={"green.500"}>
                    <RiLightbulbFlashFill
                        style={{
                            marginLeft: "-0.5rem",
                            fontSize: "1.6rem",
                        }}
                    />
                </Text>
            ) : (
                <RiLightbulbLine
                    style={{
                        marginLeft: "-0.5rem",
                        fontSize: "1.6rem",
                    }}
                />
            )} */}
        </HStack>
    );
}

function Bulbs() {
    const [light, setLight] = useLight();

    const styles = {
        position: "absolute",
        m: "4rem",
        w: "2rem",
        h: "2rem",
        border: "1px solid white",
        borderRadius: "50%",
        transition: "all ease 0.3s",
        bg: `${light ? "white" : "transparent"}`,
        boxShadow: `${
            light ? "2px 2px 30px white" : "none"
        }`,
    };
    return (
        <>
            <Box
                {...styles}
                boxShadowColor={"green"}
                top={0}
                left={0}
            />
            <Box
                {...styles}
                top={0}
                right={0}
            />
            <Box
                {...styles}
                bottom={0}
                left={0}
            />
            <Box
                {...styles}
                bottom={0}
                right={0}
            />
        </>
    );
}
