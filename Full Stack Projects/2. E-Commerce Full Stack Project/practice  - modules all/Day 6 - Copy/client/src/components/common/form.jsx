import { Button } from "../ui/button";
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea";

function CommonForm({ formControls,onSubmit,setFormData,formData,buttonText}) {
    function renderInputsByComponentType(getControlItem){
        let element=null;
        let value=formData[getControlItem.name] || ""
        
        switch(getControlItem.componentType){
            case "input":
            element=(<Input name={getControlItem.name} id={getControlItem.name} placeholder={getControlItem.placeholder} type={getControlItem.type} value={value} onChange={(event)=>setFormData({
              ...formData,
              [getControlItem.name]: event.target.value
            })}></Input>)
            
            break;
            
            // case "select" :
            //   element=(
            //     <Select value={value} onValueChange={(v)}>

            //     </Select>
            //   )

              case "textarea" : 
              element = (
                <Textarea name={getControlItem.name} id={getControlItem.name} placeholder={getControlItem.placeholder} value={value} onchange={(event) => setFormData({
                  ...formData,
                  [getControlItem.name]: event.target.value
                })}/>
              )

            default:
                element=(<Input name={getControlItem.name} id={getControlItem.name} placeholder={getControlItem.placeholder} type={getControlItem.type} value={value} onChange={(event)=>setFormData({
              ...formData,
              [getControlItem.name]: event.target.value
            })}></Input>)
            }
            return element
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {formControls.map((controlItem) => (
          <div className="w- gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      <Button type="submit" className="text-white mt-2">{buttonText || "Submit"}</Button>
      </div>
    </form>
  );
}

export default CommonForm