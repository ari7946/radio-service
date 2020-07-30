import sixteenEnero1 from '../../assets/audio/07-Enero/02-01-2016.mp3'
import sixteenEnero2 from '../../assets/audio/07-Enero/09-01-2016.mp3'
import sixteenEnero3 from '../../assets/audio/07-Enero/16-01-2016.mp3'
import sixteenEnero4 from '../../assets/audio/07-Enero/23-01-2016.mp3'
import sixteenEnero5 from '../../assets/audio/07-Enero/30-01-2016.mp3'

import sixteenFebrero1 from '../../assets/audio/08-Febrero/06-02-2016.mp3'
import sixteenFebrero2 from '../../assets/audio/08-Febrero/13-02-2016.mp3'
import sixteenFebrero3 from '../../assets/audio/08-Febrero/20-02-2016.mp3'
import sixteenFebrero4 from '../../assets/audio/08-Febrero/27-02-2016.mp3'

const data = {
  sixteen: {
    yearTitle: '2016: Elige Mes',
    allMonths: ['enero', 'febrero', 'marzo', 'april', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthsData: {
      enero: {
        id: 'enero2016',
        monthTitle: 'Enero 2016',
        audioData: [{
          audioTitle: "02-01-2016",
          audioFile: sixteenEnero1
        }, {
          audioTitle: "09-01-2016",
          audioFile: sixteenEnero2
        }, {
          audioTitle: "16-01-2016",
          audioFile: sixteenEnero3,
        }, {
          audioTitle: "23-01-2016",
          audioFile: sixteenEnero4
        }],
      },

      febrero: {
        id: 'febrero2016',
        monthTitle: 'Febrero 2016',
        audioData: [{
          audioTitle: "06-02-2016",
          audioFile: sixteenFebrero1
        }, {
          audioTitle: "13-02-2016",
          audioFile: sixteenFebrero2
        }, {
          audioTitle: "20-02-2016",
          audioFile: sixteenFebrero3,
        }, {
          audioTitle: "27-02-2016",
          audioFile: sixteenFebrero4,
        }],
      },

    }    
  }
}

export default data;