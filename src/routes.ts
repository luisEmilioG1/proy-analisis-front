export interface Route {
    title:  string;
    path:   string;
    routes?: Route[];
}

export const routes:Route[] = [
    {
        title: 'Archivo',
        path: '#',
        routes: [
            { 
                title: 'Nuevo', 
                path: '/new'
            },
            { 
                title: 'Abrir', 
                path: '#'
            }, 
            { 
                title: 'Cerrar', 
                path: '#'
            }, 
            { 
                title: 'Guardar', 
                path: '#'
            }, 
            { 
                title: 'Exporportar', 
                path: '#',
                routes: [
                    { 
                        title: 'Excel', 
                        path: '#'
                    },
                    { 
                        title: 'Imagen', 
                        path: '#'
                    }, 
                ]
            }, 
            { 
                title: 'Importar', 
                path: '#'
            }, 
        ]
    },
    { 
        title: 'Editar', 
        path: '#',
        routes: [
            { 
                title: 'Deshacer', 
                path: '#'
            },
            { 
                title: 'Nodo', 
                path: '#',
                routes: [
                    { 
                        title: 'Agregar', 
                        path: '/addnode'
                    },
                    { 
                        title: 'Editar', 
                        path: '#',
                    }, 
                    { 
                        title: 'Eliminar', 
                        path: '#'
                    }, 
                ]
            }, 
            { 
                title: 'Arco', 
                path: '#',
                routes: [
                    { 
                        title: 'Agregar', 
                        path: '#'
                    },
                    { 
                        title: 'Editar', 
                        path: '#',
                    }, 
                    { 
                        title: 'Eliminar', 
                        path: '#'
                    }, 
                ]
            }, 

        ]
    },
    { 
        title: 'Ejecutar', 
        path: '#'
    },
    { 
        title: 'Herramientas', 
        path: '#'
    },
    { 
        title: 'Ventana', 
        path: '#',
        routes: [
            { 
                title: 'Grafica', 
                path: '#'
            },
            { 
                title: 'Table', 
                path: '#',
            }, 
        ]
    },
    { 
        title: 'Ayuda', 
        path: '#',
        routes: [
            { 
                title: 'Manual', 
                path: '#'
            },
            { 
                title: 'Acerca de...', 
                path: '#',
            }, 
        ]
    }
]


