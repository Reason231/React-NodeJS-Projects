import {EventHandling} from "./EventHandling"
import {EventProps} from "./EventProps"
import {EventPropagation} from "./EventPropagation"

function EventMainComponet(){
    return(
        <>
    <EventHandling />
      <EventProps />
      <EventPropagation />
        </>
    )
}

export default EventMainComponet