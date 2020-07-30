import sixteenFirst from '../../assets/audio/07-Enero/02-01-2016.mp3'
import sixteenSecond from '../../assets/audio/07-Enero/09-01-2016.mp3'
import sixteenThird from '../../assets/audio/07-Enero/16-01-2016.mp3'
import sixteenFourth from '../../assets/audio/07-Enero/23-01-2016.mp3'


const data = {
  sixteen: {
    yearTitle: '2016: Elige Mes',
    allMonths: ['enero', 'febrero', 'marzo', 'april', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    data: {
      enero: {
        id: 1,
        monthTitle: 'Enero 2016',
        audioData: [{
          audioTitle: "02-01-2016",
          audioFile: sixteenFirst
        }, {
          audioTitle: "09-01-2016",
          audioFile: sixteenSecond
        }, {
          audioTitle: "16-01-2016",
          audioFile: sixteenThird,
        }, {
          audioTitle: "23-01-2016",
          audioFile: sixteenFourth
        }],
      },

      febrero: {
        id: 2,
        monthTitle: 'Febrero 2016',
        audioData: [{
          audioTitle: "02-01-2016",
          audioFile: sixteenFirst
        }, {
          audioTitle: "09-01-2016",
          audioFile: sixteenSecond
        }, {
          audioTitle: "16-01-2016",
          audioFile: sixteenThird,
        }, {
          audioTitle: "23-01-2016",
          audioFile: sixteenFourth
        }],
      },

    }    
  }
}

export default data;