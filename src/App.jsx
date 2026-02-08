
import Section from './components/Section';
import PaintingList from './components/PaintingList';


import paitings from './json/paitings.json';

export default function App() {
  return (
    <div>
      <Section title="Колекція картин">
        <PaintingList items={paitings} />
      </Section >
    </div>
  );
};
