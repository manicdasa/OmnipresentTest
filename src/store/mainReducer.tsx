import { ErrorMessage, Field } from "formik";
import { Label } from "reactstrap";
import { Employee } from "../components/Common/Interfaces";
import { SelectField } from "../components/Common/SelectField";

export enum CountriesEnum { SPAIN = 1, GHANA, BRAZIL }
export enum AdditionalFieldsEnum { WorkingHours = 1, MaritalStatus, SocialInsuranceNum, NumOfChildren } 

const initialState = 
{
    employee: {
        countryOfWork: undefined,
        firstName: '',
        lastName: '',
        dateOfBirth: new Date(),
        holidayAllowance: undefined,
        maritalStatus: undefined,
        socialInsuranceNumber: '',
        numberOfChildren: undefined,
        workingHours: undefined
    } as Employee,
    country: [
        { id: 1, value: 1, label: "Spain" },
        { id: 2, value: 2, label: "Ghana" },
        { id: 3, value: 3, label: "Brazil" }
    ],
    additionalFields: 
    [
        { 
            id: AdditionalFieldsEnum.MaritalStatus,
            value: (
                <div className="label-element">
                    <Label for="oldPassword">Marital Status</Label>
                    <Field 
                        component={SelectField}
                        options={[
                            { id: 1,value: 1, label: "Unmarried" },
                            { id: 2,value: 2, label: "Married" },
                            { id: 3,value: 3, label: "Divorced" },
                            { id: 4,value: 4, label: "Widowed" }
                        ]}
                        name="maritalStatus"
                        autoComplete="off"
                        required
                    />
                    <ErrorMessage component="p" className="field-color-change" name="maritalStatus"/>
                </div>
            ) 
        },
        { 
            id: AdditionalFieldsEnum.NumOfChildren, 
            value: (
                <div className="label-element">
                    <Label for="oldPassword">Number of children</Label>
                    <Field 
                        type="number"
                        name="numberOfChildren"
                        className="form-control"
                        autoComplete="off"
                        required
                    />
                    <ErrorMessage component="p" className="field-color-change" name="numberOfChildren"/>
                </div>
            ) 
        },
        { 
            id: AdditionalFieldsEnum.SocialInsuranceNum, 
            value: (
                <div className="label-element">
                    <Label for="oldPassword">Social insurance number</Label>
                    <Field 
                        type="text"
                        name="socialInsuranceNumber"
                        className="form-control"
                        autoComplete="off"
                        required
                    />
                    <ErrorMessage component="p" className="field-color-change" name="socialInsuranceNumber"/>
                </div>
            ) 
        },
        { 
            id: AdditionalFieldsEnum.WorkingHours, 
            value: (
                <div className="label-element">
                    <Label for="oldPassword">Working Hours</Label>
                    <Field 
                        type="number"
                        name="workingHours"
                        className="form-control"
                        autoComplete="off"
                        required
                    />
                    <ErrorMessage component="p" className="field-color-change" name="workingHours"/>
                </div>
            ) 
        }
    ], 
    rules:
    [
        { countryid: 3, value:[AdditionalFieldsEnum.WorkingHours] },
        { countryid: 2, value:[AdditionalFieldsEnum.MaritalStatus, AdditionalFieldsEnum.NumOfChildren] },
        { countryid: 1, value:[AdditionalFieldsEnum.MaritalStatus, AdditionalFieldsEnum.SocialInsuranceNum] }
    ]
}

export const ActionTypes =
{

}

export const ActionCreators = 
{
    
}


export default function mainReducer(state=initialState, action : any)
{
    switch(action.type)
    {
        default:
            return state;
    }
}