import sixteenEnero1 from '../../assets/audio/07-Enero/02-01-2016.mp3'
import sixteenEnero2 from '../../assets/audio/07-Enero/09-01-2016.mp3'
import sixteenEnero3 from '../../assets/audio/07-Enero/16-01-2016.mp3'
import sixteenEnero4 from '../../assets/audio/07-Enero/23-01-2016.mp3'
import sixteenEnero5 from '../../assets/audio/07-Enero/30-01-2016.mp3'

import sixteenFebrero1 from '../../assets/audio/08-Febrero/06-02-2016.mp3'
import sixteenFebrero2 from '../../assets/audio/08-Febrero/13-02-2016.mp3'
import sixteenFebrero3 from '../../assets/audio/08-Febrero/20-02-2016.mp3'
import sixteenFebrero4 from '../../assets/audio/08-Febrero/27-02-2016.mp3'

import sixteenMarzo1 from '../../assets/audio/09-Marzo/05-03-2016.mp3'
import sixteenMarzo2 from '../../assets/audio/09-Marzo/12-03-2016.mp3'
import sixteenMarzo3 from '../../assets/audio/09-Marzo/19-03-2016.mp3'
import sixteenMarzo4 from '../../assets/audio/09-Marzo/26-03-2016.mp3'

import fifteenJulio1 from '../../assets/audio/01-Julio/04-07-2015.mp3'
import fifteenJulio2 from '../../assets/audio/01-Julio/11-07-2015.mp3'
import fifteenJulio3 from '../../assets/audio/01-Julio/18-07-2015.mp3'
import fifteenJulio4 from '../../assets/audio/01-Julio/25-07-2015.mp3'

import sixteenAbril1 from '../../assets/audio/10-Abril/02-04-2016.mp3'
import sixteenAbril2 from '../../assets/audio/10-Abril/16-04-2016.mp3'
import sixteenAbril3 from '../../assets/audio/10-Abril/30-04-2016.mp3'

const data = {
  // ********* 2016 *************************************************
  sixteen: {
    yearTitle: '2016: Elige Mes',
    year: 'sixteen',
    allMonths: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthsData: {
      // ************** Enero 2016
      enero: {
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
      // ************** Febrero 2016
      febrero: {
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
      // ************** Marzo 2016    
      marzo: {
        monthTitle: 'Marzo 2016',
        audioData: [{
          audioTitle: "05-03-2016",
          audioFile: sixteenMarzo1
        }, {
          audioTitle: "12-03-2016",
          audioFile: sixteenMarzo2
        }, {
          audioTitle: "19-03-2016",
          audioFile: sixteenMarzo3,
        }, {
          audioTitle: "26-03-2016",
          audioFile: sixteenMarzo4,
        }],
      },
      // ************** Abril 2016    
      abril: {
        monthTitle: 'Abril 2016',
        audioData: [{
          audioTitle: "02-04-2016",
          audioFile: sixteenAbril1
        }, {
          audioTitle: "16-04-2016",
          audioFile: sixteenAbril2
        }, {
          audioTitle: "30-04-2016",
          audioFile: sixteenAbril3,
        }],
      },

    } //***** END 2016 monthsData */    
  }, //***** END 2016 sixteen prop */ 






































  // ********* 2015 *************************************************
  fifteen: {
    yearTitle: '2015: Elige Mes',
    year: 'fifteen',
    allMonths: ['julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthsData: {
      // ************** Julio 2015
      julio: {
        monthTitle: 'Julio 2015',
        audioData: [{
          audioTitle: "04-07-2015",
          audioFile: fifteenJulio1,
        }, {
          audioTitle: "11-07-2015",
          audioFile: fifteenJulio2,
        }, {
          audioTitle: "18-07-2015",
          audioFile: fifteenJulio3,
        }, {
          audioTitle: "25-07-2015",
          audioFile: fifteenJulio4,
        }]
      }
    
    } //***** END 2015 monthsData */  
  }, //***** END 2015 fifteen prop */  
}

export default data;