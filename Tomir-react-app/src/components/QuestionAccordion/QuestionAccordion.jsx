import SectionTitle from "../LayoutElements/SectionTitle/SectionTitle";
import AccordionItem from "./AccordionItem/AccordionItem";
import "./index.scss";
import { Container, Accordion } from "react-bootstrap";

const QuestionAccordion = () => {
  return (
    <>
      <section>
        <SectionTitle
          sectionTitleContent={"FAQ"}
          sectionTitlePosition={"left"}
        />
        <Container className="mt-5">
          <Accordion
            defaultActiveKey="0"
            className="questionBlock__accordion"
            flush
          >
            <AccordionItem
              accordionEventKey="0"
              accordionItemQuestionNumber="01"
              accordionItemQuestion="Czy się różni ładowarka sztywna od ładowarki obrotowej?"
              accordionItemText="ładowarka sztywna (czołowa) cechuje się dużym udźwigiem. Kabina operatora jest nieruchoma, a wysięg znajduje się po prawej stronie. Przykładem może służyć ładowarka teleskopowa JCB 540-170. ładowarka obrotowa posiada głowicę obrotową, która umożliwia obrót kabiny o 360 stopni. Przykładem może służyć ładowarka teleskopowa Manitou MRT 2150."
            />
            <AccordionItem
              accordionEventKey="1"
              accordionItemQuestionNumber="02"
              accordionItemQuestion="Ile kosztuje wynajem podnośnika czy ładowarki?"
              accordionItemText=" Koszt wynajmu jest uzależniony od wyboru odpowiedniego urządzenia oraz okresu wynajmu. Przy wynajmie długoterminowym cena jest niższa niż przy wynajmie krótkoterminowym."
            />
            <AccordionItem
              accordionEventKey="2"
              accordionItemQuestionNumber="03"
              accordionItemQuestion="Co oznacza 'nalepka UDT' koloru zielonego; umieszczona na podnośniku lub  ładowarce?"
              accordionItemText="Taka nalepka umieszczona na urządzeniu oznacza, że urządzenie znajduje się pod dozorem technicznym UDT. Każde urządzenie do prac na wysokości musi być zarejestrowane w Urzędzie Dozoru Technicznego oraz raz w roku przejść przegląd. Wraz taką nalepką otrzymuje się dokument (pozytywna decyzja administracyjna), który z mocy prawa umożliwia eksploatację."
            />
            <AccordionItem
              accordionEventKey="3"
              accordionItemQuestionNumber="04"
              accordionItemQuestion="Na co trzeba zwrócić uwagę przy wyborze wynajmu podnośnika nożycowego?"
              accordionItemText="Przede wszystkim trzeba odpowiedzieć sobie na pytania: gdzie będą wykonywane prace: wewnątrz pomieszczenia czy na zewnątrz; na jakie wysokości, czyli na ile metrów potrzebujemy się unieść do góry; każdy podnośnik ma swoje maksymalne obciążenie, więc na platforme nie może pracować kilka osób naraz."
            />
            <AccordionItem
              accordionEventKey="4"
              accordionItemQuestionNumber="05"
              accordionItemQuestion="Czy uprawnienia UDT z zakresu obsługi oraz konserwacji urządzeń technicznych wydawane są bezterminowo?"
              accordionItemText=" Niestety, zgodnie z ustawą z 9 listopada 2018r. o zmianie ustawy o dozorze technicznym zaświadczenia kwalifikacyjne wydane przez UDT przed 1 czerwca 2019 zachowują ważność do 01. 01. 2024. Uprawnienia ważne 5 lat.
Uprawnienia trzeba odnawiać. W tym celu trzeba było złożyć stosowny wniosek minimum 3 miesiące przed wygaśnięciem uprawnień i udokumentować, że w ostatnich 5 latach co najmniej przez 3 lata dana osoba wykonywała prace na stanowisku operatora maszyn. Nie złożenie wniosku w tym terminie spowoduje konieczność ponownego zdawania egzaminu."
            />
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default QuestionAccordion;
