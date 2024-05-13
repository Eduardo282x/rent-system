import React from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}

export const Filter = () => {

    const [type, setType] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [value, setValue] = React.useState<number[]>([0, 1000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleChangeType = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };

    const handleChangeLocation = (event: SelectChangeEvent) => {
        setLocation(event.target.value);
    };


    return (
        <div className='bg-[#0a2647] flex flex-col items-center justify-center gap-5'>
            <div className="flex items-center justify-between w-full px-8">
                <div className="flex w-[25rem]">
                    <div className="mt-4 flex justify-center items-center gap-2 w-full">
                        <span className="material-icons">search</span>
                        <input type="text" placeholder="Buscar" className="bg-gray-100 rounded-md w-full h-12 px-2 text-black outline-none" />
                    </div>
                </div>

                <button className="w-auto flex items-center justify-center rounded-md text-white font-bold p-2 gap-2 hover:bg-[#2c567c] transition-all">
                    Agregar Propiedad
                    <span className="material-icons">add_circle</span>
                </button>
            </div>

            <div className="flex items-center justify-start text-white w-full">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ color: '#fff' }}>Tipo de inmueble</InputLabel>
                    <Select
                        value={type}
                        onChange={handleChangeType}
                        autoWidth
                        sx={{ color: '#fff' }}
                        label="Tipo de inmueble"
                    >
                        <MenuItem value={1}>Casa</MenuItem>
                        <MenuItem value={2}>Apartamento</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ color: '#fff' }}>Ubicación</InputLabel>
                    <Select
                        value={location}
                        onChange={handleChangeLocation}
                        autoWidth
                        sx={{ color: '#fff' }}
                        label="Ubicación"
                    >
                        <MenuItem value={1}>Maracaibo</MenuItem>
                        <MenuItem value={2}>San Francisco</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ width: 250 }}>
                    <p>Rango de precio</p>
                    <div className="flex items-center justify-center gap-5">
                        <p className='w-[5rem]'>{value[0]}$</p>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            color=''
                            step={50}
                            min={0}
                            max={1000}
                            getAriaValueText={valuetext}
                        />
                        <p >{value[1]}$</p>
                    </div>
                </Box>
            </div>
        </div>
    )
}
