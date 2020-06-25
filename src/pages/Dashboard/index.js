import React , {useState, useMemo, useEffect} from 'react';

import api from '~/services/api';
import { format , subDays, addDays, subHours, setHours, setMinutes, setSeconds, isBefore, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 14, 15, 16, 17, 18];

function Dashbord() {
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedules] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    loadSchedule();
  }, [date])

  function handleChangeDays(type) {
    if(type === "add") setDate(addDays(date, 1))
    else setDate(subDays(date, 1))
  }

  async function loadSchedule() {
    const response = await api.get('/schedules', {
      params: { date }
    });

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = range.map(hour => {
      const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
      const compareDate = utcToZonedTime(checkDate, timezone);

      return {
        time: `${hour}:00h`,
        past: isBefore(compareDate, new Date()),
        appointment: response.data.find(a => subHours(parseISO(a.date), 3).toString() === compareDate.toString()),
      }
    });
    setSchedules(data);
  }

  return(
    <Container>
      <header>
        <button type='button'>
          <MdChevronLeft size={36} onClick={() => handleChangeDays("less")} color="#FFF"/>
        </button>
        <strong>{dateFormatted}</strong>
        <button type='button'>
          <MdChevronRight size={36} onClick={() => handleChangeDays("add")} color="#FFF"/>
        </button>
      </header>

      <ul>
        {
        schedules.map(schedule => (
          <Time key={schedule.time} past={schedule.past} available={!schedule.appointment}>
            <strong>{schedule.time}</strong>
            <span>{schedule.appointment ? schedule.appointment.user.name : 'Em aberto'}</span>
          </Time>
          )
        )
        }
      </ul>
    </Container>
  );
}

export default Dashbord;
