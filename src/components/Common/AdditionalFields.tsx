import React, { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

//project import
import { AdditionalFieldsProps, FieldArray, Rule } from "./Interfaces";

const AdditionalFields = ({ countryOfWork } : AdditionalFieldsProps) =>
{
    const [fields, setFields] = useState<FieldArray[]>([]);

    const { rules, additionalFields } = useSelector((state : RootState) => state.mainReducer);
    
    useEffect(() => {
        var rule = rules.find((rule: Rule) => rule.countryid === countryOfWork)

        setFields(additionalFields.filter((field : FieldArray) => field.id === rule?.value.find((element : number) => element === field.id)));
    }, [countryOfWork])

    return(<div>
        {fields?.map((field: FieldArray, index : number) => {
            return (<div key={index}>{field?.value}</div>)
        })}
    </div>)
}

export default AdditionalFields