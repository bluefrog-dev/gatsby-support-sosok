import * as React from "react";
import { Center, HStack, VStack, Heading, useMediaQuery } from "@chakra-ui/react"
import { Link } from "gatsby";

export default function Contact() {
    const [mobile] = useMediaQuery('(max-width: 767px)');

    return (
        <Center bgColor="var(--gray0)" p="32px 24px">
            {mobile ?
                <VStack spacing="72px">
                    <img
                        src="/images/touchphone.webp"
                        alt="휴대폰 터치 이미지"
                        style={{
                            width: "100%",
                            maxWidth: "175px",
                            height: "auto"
                        }} />
                    <VStack spacing="24px">
                        <Heading className="t1" whiteSpace="pre-line">
                            {`도움이 필요하시다면\n언제든 연락주세요`}
                        </Heading>
                        <Link to="http://pf.kakao.com/_CFIvxj/chat" target="_blank">
                            <img
                                src="/images/kakaocontact.webp"
                                alt="카카오톡 문의하기"
                                style={{
                                    width: "328px",
                                    height: "64px"
                                }} />
                        </Link>
                    </VStack>
                </VStack>
                :
                <HStack spacing="72px">
                    <VStack spacing="24px">
                        <Heading className="t1" whiteSpace="pre-line">
                            {`도움이 필요하시다면\n언제든 연락주세요`}
                        </Heading>
                        <Link to="http://pf.kakao.com/_CFIvxj/chat" target="_blank">
                            <img
                                src="/images/kakaocontact.webp"
                                alt="카카오톡 문의하기"
                                style={{
                                    width: "328px",
                                    height: "64px"
                                }} />
                        </Link>
                    </VStack>
                    <img
                        src="/images/touchphone.webp"
                        alt="휴대폰 터치 이미지"
                        style={{
                            width: "100%",
                            maxWidth: "175px",
                            height: "auto"
                        }} />
                </HStack>
            }
        </Center>
    )
}