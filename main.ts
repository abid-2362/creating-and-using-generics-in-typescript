import { MeetingResource } from './models/meeting-resource';
import { ConferenceRoom, conferenceRoomData } from './models/conference-room';

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
  let bigRooms: Array<T> = [];
  rooms.forEach(r => {
    if(r.capacity > minSize) {
      bigRooms.push(r);
    }
  });
  
  return bigRooms;
}

// let bigRooms: Array<ConferenceRoom> = getBigRooms<ConferenceRoom>(conferenceRoomData, 20);
// console.log(bigRooms);

let getLargeRooms: <T extends MeetingResource>(rooms: Array<T>, minSize: number) => Array<T>;
getLargeRooms = getBigRooms;

let largeRooms: Array<ConferenceRoom> = getLargeRooms(conferenceRoomData, 30);

console.log(largeRooms);

// function shortenArray<T>(data: Array<T>, amountToShorten: number) {
//   return data.splice(amountToShorten, data.length);
// }
//
// let stringArray: string[] = ['Visual Basic', 'C++', 'TypeScript', 'JavaScript'];
// let fewerLanguages = shortenArray<string>(stringArray, 2);
// console.log(fewerLanguages);

