import React, { ChangeEvent, FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { filterBase, IFilter, PropsFilter, valuesFilter } from './filter.data';


export const Filter: FC<PropsFilter> = ({btnFunc}) => {
    const [filter, setFilter] = React.useState<IFilter>(filterBase);

    const handleChange = (event: Event, newValue: number | number[]) => {
        changeFilter('price', newValue as number[]);
    };

    const handleChangeType = (event: SelectChangeEvent) => {
        changeFilter('type', event.target.value);
    };

    const handleChangeLocation = (event: SelectChangeEvent) => {
        changeFilter('location', event.target.value);
    };

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        changeFilter('search', event.target.value);
    };

    const changeFilter = (name: valuesFilter, value: string | number[]) => {
        const copyFilter: IFilter = { ...filter };
        if (name == 'location' || name == 'type' || name == 'search') {
            copyFilter[name] = value as string;
        } else {
            copyFilter[name] = value as number[];
        }
        setFilter(copyFilter);
    }


    return (
        <div className='bg-[#0a2647] flex flex-col items-center justify-center gap-5'>
            <div className="flex items-center justify-between w-full px-8">
                <div className="flex w-[25rem]">
                    <div className="mt-4 flex justify-center items-center gap-2 w-full">
                        <span className="material-icons">search</span>
                        <div className="flex items-center justify-between bg-gray-100 rounded-md w-full h-12 px-2 text-black">
                            <input
                                type="text"
                                placeholder="Buscar"
                                value={filter.search}
                                onChange={handleChangeSearch}
                                className="bg-transparent w-[90%] h-full px-2 outline-none"
                            />
                            {filter.search.length > 0 &&
                                <span onClick={() => changeFilter('search', '')} className="material-icons cursor-pointer text-gray-500">close</span>
                            }
                        </div>
                    </div>
                </div>

                <button onClick={btnFunc} className="w-auto flex items-center justify-center rounded-md text-white font-bold p-2 gap-2 hover:bg-[#2c567c] transition-all">
                    Agregar Propiedad
                    <span className="material-icons">add_circle</span>
                </button>
            </div>

            <div className="flex items-center justify-start text-white w-full">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ color: '#fff' }}>Tipo de inmueble</InputLabel>
                    <Select
                        value={filter.type}
                        onChange={handleChangeType}
                        autoWidth
                        sx={{ color: '#fff' }}
                        label="Tipo de inmueble"
                    >
                        <MenuItem value={'Todos'}>Todos</MenuItem>
                        <MenuItem value={'Casa'}>Casa</MenuItem>
                        <MenuItem value={'Apartamento'}>Apartamento</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel sx={{ color: '#fff' }}>Ubicación</InputLabel>
                    <Select
                        value={filter.location}
                        onChange={handleChangeLocation}
                        autoWidth
                        sx={{ color: '#fff' }}
                        label="Ubicación"
                    >
                        <MenuItem value={'Todos'}>Todos</MenuItem>
                        <MenuItem value={'Maracaibo'}>Maracaibo</MenuItem>
                        <MenuItem value={'San Francisco'}>San Francisco</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ width: 250 }}>
                    <p>Rango de precio</p>
                    <div className="flex items-center justify-center gap-5">
                        <p className='w-[5rem]'>{filter.price[0]}$</p>
                        <Slider
                            value={filter.price}
                            onChange={handleChange}
                            // color="''"
                            valueLabelDisplay="auto"
                            step={50}
                            min={0}
                            max={1000}
                        />
                        <p >{filter.price[1]}$</p>
                    </div>
                </Box>
            </div>
        </div>
    )
}
