import { CountriesEnum } from "../../store/mainReducer";

export const validateMinAllowance = (countryOfWork: number, value : number | undefined) =>
{
    return (!countryOfWork || !value || countryOfWork === CountriesEnum.SPAIN && value! > 30 || countryOfWork === CountriesEnum.BRAZIL || countryOfWork === CountriesEnum.GHANA);
}

export const validateMaxAllowance = (countryOfWork : number, value : number | undefined) =>
{
    return (!countryOfWork || !value || countryOfWork === CountriesEnum.BRAZIL && value! < 40 || countryOfWork === CountriesEnum.GHANA || countryOfWork === CountriesEnum.SPAIN);
}