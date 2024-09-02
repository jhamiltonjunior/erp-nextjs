
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useEffect, useRef, useState} from "react";
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import './style.css'

export default function Calendar({className, eventClick}) {
  const calendarRef = useRef(null);
  const [event, setEvent] = useState([])

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      // Você pode manipular a API do calendário aqui se necessário
    }
  }, []);

  useEffect(() => {
    let event = []
    for (let i = 0; i < 20; i++) {
      let day = Math.floor(Math.random() * 30) + 1;
      let hour = Math.floor(Math.random() * 20) + 7;

      day <= 9 ? day = `0${day}`: ''
      let hourInitial = hour <= 9 ? day = `0${hour}:00:00`: `${hour}:00:00`
      let hourFinal = hour <= 9 ? day = `0${hour + 1}:00:00`: `${hour + 1}:00:00`

      event.push(
        {
          title: 'event '+ i,
          start: '2024-09-' + day + `T${hourInitial}`

        }
      )
    }

    setEvent(event)
  }, [setEvent]);


  return (
    <main className={`calendar max-h-screen w-full h-full ${className}`}>
      <FullCalendar
        height={"100%"}
        dayMaxEventRows={1}
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
          eventClick()
          console.log('Clicked on: ' + info.dateStr);
          console.log('Clicked on event: ' + info.event.title);

          console.log(info)
        }}
        dayMaxEvents={true}
        allDaySlot={false}
        slotMinTime={"07:00:00"}
        slotMaxTime={"20:00:00"}
        slotDuration={'00:10:00'}
        slotLabelInterval={'01:00:00'}
        initialDate={new Date()}
        navLinks={true}
        selectable={true}
        selectMirror={true}

        dayPopoverFormat={{
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }}

        slotLabelFormat={{
          hour: '2-digit',
          minute: '2-digit',
          omitZeroMinute: false,
          meridiem: 'short'
        }}

      />
    </main>
  )
}