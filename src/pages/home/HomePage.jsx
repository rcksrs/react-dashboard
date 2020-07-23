import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import {Card} from 'primereact/card'
import {InputText} from 'primereact/inputtext'
import {InputTextarea} from 'primereact/inputtextarea'
import {Dropdown} from 'primereact/dropdown'
import {DataTable} from 'primereact/datatable'
import {Column} from 'primereact/column'
import {Button} from 'primereact/button'
import {BreadCrumb} from 'primereact/breadcrumb'
import {Calendar} from 'primereact/calendar'
import {Checkbox} from 'primereact/checkbox'
import {InputMask} from 'primereact/inputmask'

export default function HomePage() {
    const history = useHistory()

    const [time, setTime] = useState(new Date())
    const [isSelected, setSelected] = useState(false)

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

    const breadCrumbItems = [
        { label: 'Categories', command: () => { history.push('/') }},
        { label: 'Sports', command: () => { history.push('/about') } },
        { label: 'Football' },
        { label: 'Countries' }
    ];

    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];

    return (
        <>
            <div className="p-fluid p-grid" style={{marginBottom: '20px'}}>
                <div className="p-col-12">
                    <h2>Dashboard</h2>
                </div>
                <div className="p-col-12">
                    <BreadCrumb model={breadCrumbItems} home={{ icon: 'pi pi-home' }}/>
                </div>
                <div className="p-col-3">
                    <Card title="Card 1">Content</Card>
                </div>
                <div className="p-col-3">
                    <Card title="Card 2">Content</Card>
                </div>
                <div className="p-col-3">
                    <Card title="Card 3">Content</Card>
                </div>
                <div className="p-col-3">
                    <Card title="Card 4">Content</Card>
                </div>
            </div>
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
                        <InputTextarea id="address" type="text" rows="4"/>
                    </div>
                    <div className="p-field p-col-6">
                        <label htmlFor="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div className="p-field p-col-3">
                        <label htmlFor="state">State</label>
                        <Dropdown inputId="state" placeholder="Select" options={citySelectItems}/>
                    </div>
                    <div className="p-field p-col-3">
                        <label htmlFor="zip">Zip</label>
                        <InputMask id="zip" mask="99999-999"/>
                    </div>

                    <div className="p-field p-col-4">
                        <label htmlFor="calendar1">Date</label>
                        <Calendar id="calendar1" value={time} onChange={e => setTime(e.value)} dateFormat="dd/mm/yy" showIcon />
                    </div>
                    <div className="p-field p-col-4">
                        <label htmlFor="calendar2">Time</label>
                        <Calendar id="calendar2" value={time} onChange={e => setTime(e.value)} timeOnly showIcon />
                    </div>
                    <div className="p-field p-col-4">
                        <label htmlFor="calendar2">DateTime</label>
                        <Calendar id="calendar2" value={time} onChange={e => setTime(e.value)} dateFormat="dd/mm/yy" showTime showIcon />
                    </div>

                    <div className="p-field p-col-12">
                        <Checkbox inputId="cb1" onChange={() => setSelected(!isSelected)} checked={isSelected} />
                        <label htmlFor="cb1" className="p-checkbox-label">Lorem ipsum dolor sit amet</label>
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

            <Card title="Table of Content" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit" style={{marginTop: '20px'}}>
                <DataTable value={cars} paginator rows={5} style={{marginTop: '20px'}}>
                    <Column field="vin" header="Vin" sortable/>
                    <Column field="year" header="Year" sortable/>
                    <Column field="brand" header="Brand" sortable/>
                    <Column field="color" header="Color" sortable/>
                </DataTable>
            </Card>
        </>
    )
}
