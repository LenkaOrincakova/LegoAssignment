import Vendor from "./Vendor.model.js";

export default class Material{
    public ID: number | undefined;
    public Name: string | undefined;
    public Color: string | undefined;
    public PricePerUnit: number | undefined;
    public Currency: string | undefined;
    public Unit: string | undefined;
    public MeltingPoint: number | undefined;
    public TempUnit: string | undefined;
    public DeliveryTimeDays: number | undefined;
    public vendor: Vendor | undefined;
}
