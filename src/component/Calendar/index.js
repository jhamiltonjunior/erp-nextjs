
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useEffect, useRef} from "react";
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import './style.css'

export default function Calendar({className}) {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      // Você pode manipular a API do calendário aqui se necessário
    }
  }, []);

  let event = []

  for (let i = 0; i < 90; i++) {
    let day = Math.floor(Math.random() * 30) + 1;

    day <= 9 ? day = `0${day}`: ''

    event.push(
      { title: 'event '+ i, date: '2024-08-' + day }
    )
  }

  return (
    <main className={`calendar w-full  ${className}`}>
      <FullCalendar
        className={`w-full max-h-[80px]`}
        dayMaxEventRows={3}
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        editable={true}
        droppable={true}
        headerToolbar={{
          left: 'dayGridMonth timeGridWeek timeGridDay',
          center: 'title',
          right: 'today prev next',
        }}
        locales={[ptBrLocale]}
        locale={"pt-BR"}
        buttonText={{
          today: "Hoje",
          month: "Mes",
          week: "Semana",
          day: "Dia",
        }}
        events={event}
        customButtons={{
          prev: {
            text: 'Mes Anterior',
            click: () => calendarRef.current.getApi().prev(),
            classNames: ['custom-button'],
          },
          next: {
            text: 'Próximo Mes',
            click: () => calendarRef.current.getApi().next(),
            classNames: ['custom-button'],
          },
          today: {
            text: 'Hoje',
            click: () => calendarRef.current.getApi().today(),
            classNames: ['custom-button'],
          },
          month: {
            text: 'Mes Anterior',
            click: () => calendarRef.current.getApi().prev(),
            classNames: ['custom-button'],
          },
        }}
        initialView="dayGridMonth"

        dateClick={function(info) {
          console.log('Data clicada: ' + info.dateStr);
        }}

        drop={ function(info) {
          alert(info.event.title + " was dropped on " + info.event.start.toISOString());

          if (document.getElementById('drop-remove').checked) {
            info.event.remove();
          }
        }}

        eventClick={function(info) {
          console.log('Clicked on: ' + info.dateStr);
          console.log('Clicked on event: ' + info.event.title);

          console.log(info)
        }}

      />
    </main>
  )
}