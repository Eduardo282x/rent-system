import React, { forwardRef } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ISales } from '../../interfaces/rent.interface';

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        height: 100,
        justifyContent: 'center', // Asegura que el contenido comience desde la parte superior
        backgroundColor: '#FFFFFF',
        color: '#000',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    text: {
        textAlign: 'justify', // Justificar el texto
        fontSize: 12,
    },
});

export const Contract = forwardRef<HTMLElement, ISales>(({ property }, ref) => (
    <Document ref={ref}>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.text}>
                    Yo, {property.client.name} {property.client.lastname} de Profesión -- mayor de edad, de estado civil {property.client.civil} de nacionalidad {property.client.identify} y de este domicilio, titular de la cédula de identidad número {property.client.identify} por medio de la presente declaración, AUTORIZO a la empresa ---- representada por el ciudadano {property.autorization.name} {property.autorization.lastname} portador de la cédula de identidad número {property.autorization.identify} con carácter de exclusividad para vender un inmueble de mi propiedad ubicado en la Urbanización -- avenida -- denominado -- por la cantidad convenida de {property.price} bolívares

                    Expresamente convengo en pagarle a la empresa --------- a título de comisión un porcentaje equivalente al -- -- por el monto de la venta.

                    Esta autorización tiene un plazo de -- días a partir de la presente fecha.
                    Queda entendido que durante la validez de esta autorización, no podré realizar ninguna gestión referente a obtener la venta del pre¬nombrado inmueble. En Maracaibo a los ---- del mes de ---- del año 2024.-
                </Text>
            </View>
        </Page>
    </Document>
));
