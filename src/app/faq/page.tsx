import { Content } from "@/components/Content";
import { Accordion } from "@/sharedComponents/Accordion/Accordion";
import { faq } from "@/utils/data";

export default function FAQ() {

    return <Content>
        <Accordion listIterating={faq} pageTitle="Вопросы и ответы" />
    </Content>
}