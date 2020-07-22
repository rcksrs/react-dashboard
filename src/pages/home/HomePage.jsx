import React from 'react'
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext'
import {InputTextarea} from 'primereact/inputtextarea'
import {Dropdown} from 'primereact/dropdown'
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button'

export default function HomePage() {
    const cars = [
        {"brand": "Volkswagen", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
    ]

    return (
        <>
            <Card title="Title">
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="firstname6">Firstname</label>
                        <InputText id="firstname6" type="text" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="lastname6">Lastname</label>
                        <InputText id="lastname6" type="text" />
                    </div>
                    <div className="p-field p-col-12">
                        <label htmlFor="address">Address</label>
                        <InputTextarea id="address" type="text" rows="4" />
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div className="p-field p-col-3">
                        <label htmlFor="state">State</label>
                        <Dropdown inputId="state" placeholder="Select" optionLabel="name"/>
                    </div>
                    <div className="p-field p-col-3">
                        <label htmlFor="zip">Zip</label>
                        <InputText id="zip" type="text" />
                    </div>
                    <div className="p-formgroup-inline p-col-12">
                        <div className="p-field">
                            <Button label="Primary" />
                        </div>
                        <div className="p-field">
                            <Button label="Secondary" className="p-button-secondary" />
                        </div>
                        <div className="p-field">
                            <Button label="Success" className="p-button-success" />
                        </div>
                        <div className="p-field">
                            <Button label="Warning" className="p-button-warning" />
                        </div>
                        <div className="p-field">
                            <Button label="Danger" className="p-button-danger" />
                        </div>
                    </div>
                </div>
            </Card>

            <Card title="Title 2" style={{marginTop: '20px'}}>
                <DataTable value={cars}>
                    <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="brand" header="Brand" />
                    <Column field="color" header="Color" />
                </DataTable>
            </Card>
        </>
    )
}
