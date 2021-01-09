import { MeetingResource } from './models/meeting-resource';
import { ConferenceRoom, conferenceRoomData } from './models/conference-room';

class Reservation<T extends MeetingResource> {
  reservationDate: Date;
  organizerName: string = '';
  resource: T;
  
  requestResource(requestedResource: T, requester: string) {
    this.resource = requestedResource;
    this.organizerName = requester;
    console.log(`${requester} requested a reservation ${requestedResource.name}`);
  }
}

let teamMeeting = new Reservation<ConferenceRoom>();
teamMeeting.requestResource(conferenceRoomData[0], 'Gary');
