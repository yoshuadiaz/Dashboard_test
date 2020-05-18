const covidData = {
  entidades: {
    'BAJA CALIFORNIA': {
      PRUEBAS_TOTALES: 6152,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 3204,
          'Positivo SARS-CoV-2': 1802,
          'No positivo SARS-CoV-2': 991,
          'Resultado pendiente': 411
        },
        MUJER: {
          PRUEBAS_TOTALES: 2948,
          'Positivo SARS-CoV-2': 1453,
          'No positivo SARS-CoV-2': 1159,
          'Resultado pendiente': 336
        }
      },
      'Positivo SARS-CoV-2': 3255,
      'No positivo SARS-CoV-2': 2150,
      'Resultado pendiente': 747
    },
    MÉXICO: {
      PRUEBAS_TOTALES: 26136,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 13460,
          'Positivo SARS-CoV-2': 4803,
          'No positivo SARS-CoV-2': 4398,
          'Resultado pendiente': 4259
        },
        MUJER: {
          PRUEBAS_TOTALES: 12676,
          'Positivo SARS-CoV-2': 3384,
          'No positivo SARS-CoV-2': 4775,
          'Resultado pendiente': 4517
        }
      },
      'Positivo SARS-CoV-2': 8187,
      'No positivo SARS-CoV-2': 9173,
      'Resultado pendiente': 8776
    },
    'VERACRUZ DE IGNACIO DE LA LLAVE': {
      PRUEBAS_TOTALES: 5254,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2862,
          'Positivo SARS-CoV-2': 1219,
          'No positivo SARS-CoV-2': 1158,
          'Resultado pendiente': 485
        },
        MUJER: {
          PRUEBAS_TOTALES: 2392,
          'Positivo SARS-CoV-2': 706,
          'No positivo SARS-CoV-2': 1297,
          'Resultado pendiente': 389
        }
      },
      'Positivo SARS-CoV-2': 1925,
      'No positivo SARS-CoV-2': 2455,
      'Resultado pendiente': 874
    },
    'CIUDAD DE MÉXICO': {
      PRUEBAS_TOTALES: 39127,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 19986,
          'Positivo SARS-CoV-2': 7778,
          'No positivo SARS-CoV-2': 8868,
          'Resultado pendiente': 3340
        },
        MUJER: {
          PRUEBAS_TOTALES: 19141,
          'Positivo SARS-CoV-2': 5894,
          'No positivo SARS-CoV-2': 9875,
          'Resultado pendiente': 3372
        }
      },
      'Positivo SARS-CoV-2': 13672,
      'No positivo SARS-CoV-2': 18743,
      'Resultado pendiente': 6712
    },
    SINALOA: {
      PRUEBAS_TOTALES: 4788,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2441,
          'Positivo SARS-CoV-2': 1062,
          'No positivo SARS-CoV-2': 1051,
          'Resultado pendiente': 328
        },
        MUJER: {
          PRUEBAS_TOTALES: 2347,
          'Positivo SARS-CoV-2': 865,
          'No positivo SARS-CoV-2': 1222,
          'Resultado pendiente': 260
        }
      },
      'Positivo SARS-CoV-2': 1927,
      'No positivo SARS-CoV-2': 2273,
      'Resultado pendiente': 588
    },
    YUCATÁN: {
      PRUEBAS_TOTALES: 3337,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1716,
          'Positivo SARS-CoV-2': 665,
          'No positivo SARS-CoV-2': 969,
          'Resultado pendiente': 82
        },
        MUJER: {
          PRUEBAS_TOTALES: 1621,
          'Positivo SARS-CoV-2': 448,
          'No positivo SARS-CoV-2': 1101,
          'Resultado pendiente': 72
        }
      },
      'Positivo SARS-CoV-2': 1113,
      'No positivo SARS-CoV-2': 2070,
      'Resultado pendiente': 154
    },
    QUERÉTARO: {
      PRUEBAS_TOTALES: 1576,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 794,
          'Positivo SARS-CoV-2': 229,
          'No positivo SARS-CoV-2': 467,
          'Resultado pendiente': 98
        },
        MUJER: {
          PRUEBAS_TOTALES: 782,
          'Positivo SARS-CoV-2': 187,
          'No positivo SARS-CoV-2': 490,
          'Resultado pendiente': 105
        }
      },
      'Positivo SARS-CoV-2': 416,
      'No positivo SARS-CoV-2': 957,
      'Resultado pendiente': 203
    },
    SONORA: {
      PRUEBAS_TOTALES: 3232,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1627,
          'Positivo SARS-CoV-2': 513,
          'No positivo SARS-CoV-2': 822,
          'Resultado pendiente': 292
        },
        MUJER: {
          PRUEBAS_TOTALES: 1605,
          'Positivo SARS-CoV-2': 369,
          'No positivo SARS-CoV-2': 964,
          'Resultado pendiente': 272
        }
      },
      'Positivo SARS-CoV-2': 882,
      'No positivo SARS-CoV-2': 1786,
      'Resultado pendiente': 564
    },
    TABASCO: {
      PRUEBAS_TOTALES: 5247,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2862,
          'Positivo SARS-CoV-2': 1367,
          'No positivo SARS-CoV-2': 1265,
          'Resultado pendiente': 230
        },
        MUJER: {
          PRUEBAS_TOTALES: 2385,
          'Positivo SARS-CoV-2': 1014,
          'No positivo SARS-CoV-2': 1168,
          'Resultado pendiente': 203
        }
      },
      'Positivo SARS-CoV-2': 2381,
      'No positivo SARS-CoV-2': 2433,
      'Resultado pendiente': 433
    },
    MORELOS: {
      PRUEBAS_TOTALES: 2189,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1177,
          'Positivo SARS-CoV-2': 655,
          'No positivo SARS-CoV-2': 460,
          'Resultado pendiente': 62
        },
        MUJER: {
          PRUEBAS_TOTALES: 1012,
          'Positivo SARS-CoV-2': 435,
          'No positivo SARS-CoV-2': 516,
          'Resultado pendiente': 61
        }
      },
      'Positivo SARS-CoV-2': 1090,
      'No positivo SARS-CoV-2': 976,
      'Resultado pendiente': 123
    },
    'BAJA CALIFORNIA SUR': {
      PRUEBAS_TOTALES: 1664,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 796,
          'Positivo SARS-CoV-2': 247,
          'No positivo SARS-CoV-2': 518,
          'Resultado pendiente': 31
        },
        MUJER: {
          PRUEBAS_TOTALES: 868,
          'Positivo SARS-CoV-2': 212,
          'No positivo SARS-CoV-2': 621,
          'Resultado pendiente': 35
        }
      },
      'Positivo SARS-CoV-2': 459,
      'No positivo SARS-CoV-2': 1139,
      'Resultado pendiente': 66
    },
    CHIHUAHUA: {
      PRUEBAS_TOTALES: 2774,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1418,
          'Positivo SARS-CoV-2': 520,
          'No positivo SARS-CoV-2': 578,
          'Resultado pendiente': 320
        },
        MUJER: {
          PRUEBAS_TOTALES: 1356,
          'Positivo SARS-CoV-2': 397,
          'No positivo SARS-CoV-2': 643,
          'Resultado pendiente': 316
        }
      },
      'Positivo SARS-CoV-2': 917,
      'No positivo SARS-CoV-2': 1221,
      'Resultado pendiente': 636
    },
    TAMAULIPAS: {
      PRUEBAS_TOTALES: 4957,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2603,
          'Positivo SARS-CoV-2': 607,
          'No positivo SARS-CoV-2': 1675,
          'Resultado pendiente': 321
        },
        MUJER: {
          PRUEBAS_TOTALES: 2354,
          'Positivo SARS-CoV-2': 332,
          'No positivo SARS-CoV-2': 1759,
          'Resultado pendiente': 263
        }
      },
      'Positivo SARS-CoV-2': 939,
      'No positivo SARS-CoV-2': 3434,
      'Resultado pendiente': 584
    },
    'QUINTANA ROO': {
      PRUEBAS_TOTALES: 2524,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1409,
          'Positivo SARS-CoV-2': 803,
          'No positivo SARS-CoV-2': 508,
          'Resultado pendiente': 98
        },
        MUJER: {
          PRUEBAS_TOTALES: 1115,
          'Positivo SARS-CoV-2': 512,
          'No positivo SARS-CoV-2': 523,
          'Resultado pendiente': 80
        }
      },
      'Positivo SARS-CoV-2': 1315,
      'No positivo SARS-CoV-2': 1031,
      'Resultado pendiente': 178
    },
    JALISCO: {
      PRUEBAS_TOTALES: 8979,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 4597,
          'Positivo SARS-CoV-2': 507,
          'No positivo SARS-CoV-2': 3839,
          'Resultado pendiente': 251
        },
        MUJER: {
          PRUEBAS_TOTALES: 4382,
          'Positivo SARS-CoV-2': 338,
          'No positivo SARS-CoV-2': 3827,
          'Resultado pendiente': 217
        }
      },
      'Positivo SARS-CoV-2': 845,
      'No positivo SARS-CoV-2': 7666,
      'Resultado pendiente': 468
    },
    AGUASCALIENTES: {
      PRUEBAS_TOTALES: 3496,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1624,
          'Positivo SARS-CoV-2': 238,
          'No positivo SARS-CoV-2': 1225,
          'Resultado pendiente': 161
        },
        MUJER: {
          PRUEBAS_TOTALES: 1872,
          'Positivo SARS-CoV-2': 234,
          'No positivo SARS-CoV-2': 1444,
          'Resultado pendiente': 194
        }
      },
      'Positivo SARS-CoV-2': 472,
      'No positivo SARS-CoV-2': 2669,
      'Resultado pendiente': 355
    },
    HIDALGO: {
      PRUEBAS_TOTALES: 2101,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1117,
          'Positivo SARS-CoV-2': 509,
          'No positivo SARS-CoV-2': 492,
          'Resultado pendiente': 116
        },
        MUJER: {
          PRUEBAS_TOTALES: 984,
          'Positivo SARS-CoV-2': 335,
          'No positivo SARS-CoV-2': 531,
          'Resultado pendiente': 118
        }
      },
      'Positivo SARS-CoV-2': 844,
      'No positivo SARS-CoV-2': 1023,
      'Resultado pendiente': 234
    },
    DURANGO: {
      PRUEBAS_TOTALES: 1464,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 696,
          'Positivo SARS-CoV-2': 75,
          'No positivo SARS-CoV-2': 532,
          'Resultado pendiente': 89
        },
        MUJER: {
          PRUEBAS_TOTALES: 768,
          'Positivo SARS-CoV-2': 83,
          'No positivo SARS-CoV-2': 605,
          'Resultado pendiente': 80
        }
      },
      'Positivo SARS-CoV-2': 158,
      'No positivo SARS-CoV-2': 1137,
      'Resultado pendiente': 169
    },
    'NUEVO LEÓN': {
      PRUEBAS_TOTALES: 9546,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 4874,
          'Positivo SARS-CoV-2': 483,
          'No positivo SARS-CoV-2': 3792,
          'Resultado pendiente': 599
        },
        MUJER: {
          PRUEBAS_TOTALES: 4672,
          'Positivo SARS-CoV-2': 377,
          'No positivo SARS-CoV-2': 3721,
          'Resultado pendiente': 574
        }
      },
      'Positivo SARS-CoV-2': 860,
      'No positivo SARS-CoV-2': 7513,
      'Resultado pendiente': 1173
    },
    GUANAJUATO: {
      PRUEBAS_TOTALES: 8704,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 4220,
          'Positivo SARS-CoV-2': 401,
          'No positivo SARS-CoV-2': 3512,
          'Resultado pendiente': 307
        },
        MUJER: {
          PRUEBAS_TOTALES: 4484,
          'Positivo SARS-CoV-2': 334,
          'No positivo SARS-CoV-2': 3798,
          'Resultado pendiente': 352
        }
      },
      'Positivo SARS-CoV-2': 735,
      'No positivo SARS-CoV-2': 7310,
      'Resultado pendiente': 659
    },
    ZACATECAS: {
      PRUEBAS_TOTALES: 1202,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 614,
          'Positivo SARS-CoV-2': 116,
          'No positivo SARS-CoV-2': 472,
          'Resultado pendiente': 26
        },
        MUJER: {
          PRUEBAS_TOTALES: 588,
          'Positivo SARS-CoV-2': 84,
          'No positivo SARS-CoV-2': 478,
          'Resultado pendiente': 26
        }
      },
      'Positivo SARS-CoV-2': 200,
      'No positivo SARS-CoV-2': 950,
      'Resultado pendiente': 52
    },
    'COAHUILA DE ZARAGOZA': {
      PRUEBAS_TOTALES: 5978,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2901,
          'Positivo SARS-CoV-2': 359,
          'No positivo SARS-CoV-2': 2027,
          'Resultado pendiente': 515
        },
        MUJER: {
          PRUEBAS_TOTALES: 3077,
          'Positivo SARS-CoV-2': 320,
          'No positivo SARS-CoV-2': 2265,
          'Resultado pendiente': 492
        }
      },
      'Positivo SARS-CoV-2': 679,
      'No positivo SARS-CoV-2': 4292,
      'Resultado pendiente': 1007
    },
    GUERRERO: {
      PRUEBAS_TOTALES: 2516,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1359,
          'Positivo SARS-CoV-2': 491,
          'No positivo SARS-CoV-2': 558,
          'Resultado pendiente': 310
        },
        MUJER: {
          PRUEBAS_TOTALES: 1157,
          'Positivo SARS-CoV-2': 307,
          'No positivo SARS-CoV-2': 595,
          'Resultado pendiente': 255
        }
      },
      'Positivo SARS-CoV-2': 798,
      'No positivo SARS-CoV-2': 1153,
      'Resultado pendiente': 565
    },
    PUEBLA: {
      PRUEBAS_TOTALES: 4430,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2301,
          'Positivo SARS-CoV-2': 860,
          'No positivo SARS-CoV-2': 1132,
          'Resultado pendiente': 309
        },
        MUJER: {
          PRUEBAS_TOTALES: 2129,
          'Positivo SARS-CoV-2': 589,
          'No positivo SARS-CoV-2': 1289,
          'Resultado pendiente': 251
        }
      },
      'Positivo SARS-CoV-2': 1449,
      'No positivo SARS-CoV-2': 2421,
      'Resultado pendiente': 560
    },
    COLIMA: {
      PRUEBAS_TOTALES: 386,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 196,
          'Positivo SARS-CoV-2': 44,
          'No positivo SARS-CoV-2': 136,
          'Resultado pendiente': 16
        },
        MUJER: {
          PRUEBAS_TOTALES: 190,
          'Positivo SARS-CoV-2': 25,
          'No positivo SARS-CoV-2': 148,
          'Resultado pendiente': 17
        }
      },
      'Positivo SARS-CoV-2': 69,
      'No positivo SARS-CoV-2': 284,
      'Resultado pendiente': 33
    },
    NAYARIT: {
      PRUEBAS_TOTALES: 1130,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 517,
          'Positivo SARS-CoV-2': 165,
          'No positivo SARS-CoV-2': 316,
          'Resultado pendiente': 36
        },
        MUJER: {
          PRUEBAS_TOTALES: 613,
          'Positivo SARS-CoV-2': 151,
          'No positivo SARS-CoV-2': 416,
          'Resultado pendiente': 46
        }
      },
      'Positivo SARS-CoV-2': 316,
      'No positivo SARS-CoV-2': 732,
      'Resultado pendiente': 82
    },
    'MICHOACÁN DE OCAMPO': {
      PRUEBAS_TOTALES: 4128,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 2089,
          'Positivo SARS-CoV-2': 553,
          'No positivo SARS-CoV-2': 1198,
          'Resultado pendiente': 338
        },
        MUJER: {
          PRUEBAS_TOTALES: 2039,
          'Positivo SARS-CoV-2': 364,
          'No positivo SARS-CoV-2': 1373,
          'Resultado pendiente': 302
        }
      },
      'Positivo SARS-CoV-2': 917,
      'No positivo SARS-CoV-2': 2571,
      'Resultado pendiente': 640
    },
    CHIAPAS: {
      PRUEBAS_TOTALES: 1778,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 989,
          'Positivo SARS-CoV-2': 406,
          'No positivo SARS-CoV-2': 463,
          'Resultado pendiente': 120
        },
        MUJER: {
          PRUEBAS_TOTALES: 789,
          'Positivo SARS-CoV-2': 247,
          'No positivo SARS-CoV-2': 441,
          'Resultado pendiente': 101
        }
      },
      'Positivo SARS-CoV-2': 653,
      'No positivo SARS-CoV-2': 904,
      'Resultado pendiente': 221
    },
    TLAXCALA: {
      PRUEBAS_TOTALES: 1923,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 900,
          'Positivo SARS-CoV-2': 305,
          'No positivo SARS-CoV-2': 541,
          'Resultado pendiente': 54
        },
        MUJER: {
          PRUEBAS_TOTALES: 1023,
          'Positivo SARS-CoV-2': 246,
          'No positivo SARS-CoV-2': 714,
          'Resultado pendiente': 63
        }
      },
      'Positivo SARS-CoV-2': 551,
      'No positivo SARS-CoV-2': 1255,
      'Resultado pendiente': 117
    },
    'SAN LUIS POTOSÍ': {
      PRUEBAS_TOTALES: 3158,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 1491,
          'Positivo SARS-CoV-2': 253,
          'No positivo SARS-CoV-2': 1149,
          'Resultado pendiente': 89
        },
        MUJER: {
          PRUEBAS_TOTALES: 1667,
          'Positivo SARS-CoV-2': 201,
          'No positivo SARS-CoV-2': 1376,
          'Resultado pendiente': 90
        }
      },
      'Positivo SARS-CoV-2': 454,
      'No positivo SARS-CoV-2': 2525,
      'Resultado pendiente': 179
    },
    OAXACA: {
      PRUEBAS_TOTALES: 1562,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 774,
          'Positivo SARS-CoV-2': 257,
          'No positivo SARS-CoV-2': 389,
          'Resultado pendiente': 128
        },
        MUJER: {
          PRUEBAS_TOTALES: 788,
          'Positivo SARS-CoV-2': 188,
          'No positivo SARS-CoV-2': 454,
          'Resultado pendiente': 146
        }
      },
      'Positivo SARS-CoV-2': 445,
      'No positivo SARS-CoV-2': 843,
      'Resultado pendiente': 274
    },
    CAMPECHE: {
      PRUEBAS_TOTALES: 856,
      GENEROS: {
        HOMBRE: {
          PRUEBAS_TOTALES: 496,
          'Positivo SARS-CoV-2': 218,
          'No positivo SARS-CoV-2': 240,
          'Resultado pendiente': 38
        },
        MUJER: {
          PRUEBAS_TOTALES: 360,
          'Positivo SARS-CoV-2': 78,
          'No positivo SARS-CoV-2': 239,
          'Resultado pendiente': 43
        }
      },
      'Positivo SARS-CoV-2': 296,
      'No positivo SARS-CoV-2': 479,
      'Resultado pendiente': 81
    }
  },
  resultadosGenerales: {
    'Positivo SARS-CoV-2': 49219,
    'No positivo SARS-CoV-2': 95568,
    'Resultado pendiente': 27507
  },
  resultadosGenero: {
    HOMBRE: 88110,
    MUJER: 84184
  },
  total: 172294
}

export default covidData
