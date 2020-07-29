import sixteenFirst from '../../assets/audio/07-Enero/02-01-2016.mp3'
import sixteenSecond from '../../assets/audio/07-Enero/09-01-2016.mp3'
import sixteenThird from '../../assets/audio/07-Enero/16-01-2016.mp3'
import sixteenFourth from '../../assets/audio/07-Enero/23-01-2016.mp3'


const data = {
  sixteen: {
    id: 1,
    yearTitle: '2016: Elige Mes',
    monthTitle: 'Enero 2016',
    months: ['enero', 'febrero', 'marzo', 'april', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    audioData: [{
      audioTitle: "02-01-2016",
      // audioPath: "../../../../audio/07-Enero/02-01-2016.mp3",
      audioFile: sixteenFirst
    },
    {
      audioTitle: "09-01-2016",
      audioFile: sixteenSecond
    },
    {
      audioTitle: "16-01-2016",
      audioFile: sixteenThird,
    },
    {
      audioTitle: "23-01-2016",
      audioFile: sixteenFourth
    }],
  }
}

export default data;