import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center max-w-6xl mx-auto">
        <div className="">
          <Image src="/logo.png" alt="logo" width={500} height={500} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold">Acelera tu desarrollo de software sin sacrificar calidad</h1>
          <p className="text-2xl mt-10">
          La solución definitiva para equipos que quieren hacer más en menos tiempo
          </p>
        </div>
      </div>

      <div className="mt-20 bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">¿Te sientes atrapado con estos problemas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Desarrollo lento y costoso</h3>
              <p className="text-gray-600">Los procesos ineficientes y la falta de optimización están ralentizando tu progreso y aumentando los costos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Bugs y errores recurrentes</h3>
              <p className="text-gray-600">Los problemas de calidad persisten y afectan la confiabilidad de tus productos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Dificultad con nuevas tecnologías</h3>
              <p className="text-gray-600">La adopción de nuevas herramientas y frameworks se vuelve un desafío constante.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Equipos desbordados</h3>
              <p className="text-gray-600">Tu equipo lucha por mantenerse al día con las últimas tendencias y mejores prácticas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Complejidad innecesaria</h3>
              <p className="text-gray-600">Las soluciones técnicas se vuelven más complicadas de lo necesario, dificultando el mantenimiento.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-white py-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Imagina poder...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Desarrollar 10x más rápido</h3>
              <p className="text-gray-600">Optimiza tus procesos y multiplica la velocidad de desarrollo sin comprometer la calidad.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Entregar productos con menos errores</h3>
              <p className="text-gray-600">Implementa prácticas que reducen significativamente los bugs y mejoran la confiabilidad.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Adoptar nuevas tecnologías fácilmente</h3>
              <p className="text-gray-600">Integra nuevas herramientas y frameworks de manera fluida y sin complicaciones.</p>
            </div>
            <div className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Enfocarte en lo que importa</h3>
              <p className="text-gray-600">Dedica tu tiempo a la arquitectura y los conceptos fundamentales que impulsan el valor.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestra solución transforma tu desarrollo de software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Velocidad x10</h3>
              <p className="text-gray-600">Aumenta la velocidad del desarrollo hasta un 1000% con nuestras metodologías optimizadas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Código de calidad</h3>
              <p className="text-gray-600">Mejora significativamente la calidad del código mediante prácticas probadas y herramientas efectivas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Aprendizaje acelerado</h3>
              <p className="text-gray-600">Reduce drásticamente la curva de aprendizaje de nuevas tecnologías con nuestra guía estructurada.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Enfoque esencial</h3>
              <p className="text-gray-600">Te permite enfocarte en lo esencial: conceptos y arquitecturas que impulsan el valor del negocio.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 py-16 bg-white">
        <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Lista de tecnologías usadas en los proyectos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4">
            
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/1024px-Oracle_logo.svg.png"
                alt="Oracle"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Oracle</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX////P2Ny3HBy0AAC2GBi2FRW1AAC2ExPT29/M1dr4+fra4eT7/PzY3+Le5OfV3eDz9fbp7e+1DQ3s8PG1Dg61Bwf57OzQe3veo6P78/Pz3t7v0tLowMD9+fnir6/mubm8MTG+ODjBRUXHW1u6IiLUhobw1tbDTU3YkZHFVlbMbm7sycnNcXH35+ffp6e/Pz/KZWXWjo7Ip6rbm5u7LCzMy8+7VljDhojBfH6+YGHGnJ/JwMS/b3HgyMrTr7G+W1zFkZS9aWs0DY2LAAAU90lEQVR4nO1diZbaONYG5A1svABm3zFQ7FQgnelk5p+e93+p0dViSV6q0z0JNvn5zul0lQ2UPu5+JUuVygsvvPDCCy+88MILL7zwwnPAD1yrUfQgfhYc323W6/Vq9Zdk2Gi7XhWTI/j1GPquFbP79Rg6gV2X2f1iDP3Ak+nV65YF//OLHtcPgu96Kju33ai0678KQyewZHZVt+2Q6z4wbBc8uB+Ati2kV682A2F4hGFQ4NB+BBqBFfMD1XTkmw7ccosa2g9Bw40DA9ZN30ncdqpPzrDhCnp2prmBeTYfPawfBieI1dPL8yY2vmk9dFQ/EG1hf1XPDVIaSuDC3cw75Yerpi44RFiYZvJVwdMGRMdL5maUZh1oSmna04YLx6OU3AyaIM6m26Za23hWZ+rR6OdXqLNpNlPpNr7g2UHbB2fqFT3cvw7Cq05E0wQ6loOzbrtaT/Ok/xY93r+M0+dqbF0kpldt+rMfQOGbstDnczVvv3nCuNr1quJMHL/t2pYqzqdzNVf0xRNBjoSNpJioODmeLqvZmsYftviVmGJWJd+IKT5bzL92asY/xKCpKXopFr4wxGcrEd+NWs34rRv/7teFtxEIKDn7GSPiBtVqtZZ2ji9I0SMGrYrxRRJOHj3E/xX7FqaoodbtxC64CYfKNRQuuc8YL7ogROCIdrfhBK7Yirk5PC0HYv5T1vk3SrFWM5Fx2U+HjGKVUgyYANmMhfWM3rSybdU49BYyotXt02fLskBobZ6rcbm51WesL7qRXpOgmYZhRL9/+foNx3naB7Zi06NhscjR/i2MDI1wC1uaoBlimtv/fPn07bPS1rCfMSRWKjNiitGth/1NSxc09U5ohNHlup6NeMQkvubpAkalcgaKmtatnGbHha7QxDzNEGEs9rfpZlJpelhzn84SmUM1IxITT6P+folphh1Bk3ohjPvun6C5k6IH/NfxBhQ7izh96w6n79c7cFJ5amYLW2gNa+55NHwunu8kfbuog55sZrdrhBSO3EKxkKPF9TbeFDTgvw5CMdxm3DltJYqaShSkPD/ext1nkOcaKKJe6vq0ZgKdDoKwqc3B7bTUCAoWGq3Ws2E342PLhCOhOFUvDvZESTW0GvZCLOS3yXB2O14MTCo0NcnlgseNduvxKfvDy4FdCFQUwzrUQsLvfsDaijMD7c5udEez910EWtrRNZXmFZLbcmKwwPqo36UrNyJA03gjZrbvYBkf5Hd0R+O366XWUZQW0zb351MpLXMIoQGt+a8Torc1dGFiPSD5rsCpp1BkLC+9w+BRA/9+TIkpjugvpwtJdVAvlgZWUzPtbWeXMGYG8ZMprR5ihR0/bOjfiz0erLkkP45CkEynJQ3y2MKmlnCY44g42RrxtLXDbL/ooFAXouyNHjj878AA3Abxp2Nigmgp+8Y+EhKmGO1oPmCiLWZl7uDaadxbGogVKlqILv1SRRGoM8BhTinBo+IvRsBQdK0qpyPqUH670Rjuvcd3pkcThZSkjvRjmTKfrQlC7ANBDb2p96CpEwpX84ZCyu8yoi0tVb6Htc5IYkFuZw8Z/fdgRN0L+ScR/SuDSKu1eNZziFgucAFLnWD11qLUh/UiRDIi/DXcp2WJHzuTuYl7ykdMLnrNXJEfTzTXqeGBk99BScN0ylcZzFZckGh+LgfHA2++Rft+MqJhFabhot8KabK6Zq9IZwMxhmsDMY73t1I06u48C4OcbPF+kL54LF/9gse8JEPW0ZV72q6JldTM/chzxDwrispgj1MuROoIRa+4UllhhsvJG7UttBCh8qx4UhXd8buovzS0zJb0IzEgDKXOm4lFSVMwrKXaZYvoxTdJuNhAaygj4Z6M3nZhnAGwT9sXXn9csU213nrQxDClFGw/nix1qHupKGQ+YLs03MsYzPZ38RECYev2QDZZgKgPkWIyOq/ucacGCl0+xlbnrLxjBX5GtbDudCuaPDh9M+5EgAaNMGk//VCcMJPOlf482dyuGs9OONDulHqDdpeU9tTfIRYIiZLP9/3hsQPpwixC1LzXhRYeYG6G+HVwWEdI6keZ/cTrofoX+U93ik2PB1VcEq9uwwHNh7TOqTJYMz91L9LjrMOU39i8LYQ/vL8rufSJlJXs0mwVctPDwovWPNhAVkczvuGWxZqMUvNRIFl0MnBNhUPEZaCcS7/H+cxmbQp64fYmXkSSQcQ08xyRfAFdCmt3DNUMGzC5MjejUaIttOJa1oWaF2H9O29FOYFWfWX4JKEXinyl7ZFWMvN9FCY4BVGd/3DBCS62rPTroC2N+CDCTu8UJ9lYwqmSEDICrSb5ohl5sZaXJfx04ACuyR2paewYW8fKBpd+rOxdHFiCoM1FoTS/pSJ6N92oPNHEAW2L8ak45mum+NNrwqgV8WF2b3PWumBtVN4LN1HUy3KRV+xmOsmM4J18ajgvxBhhosbgf3mwo992D2el/OpkuqBy7LS4dEF8u1mmRMgEJUrV+eMQ3mvqRYSNmdSQGd5pU7hfwdapzcX47sqUjY6MdY40ujWlSSlwmsNH60YBHTkSLg7sR9DHVm1Di1x5nOOLoIgu+SX8CuuoPs+6Qz10upnw83GIA2KfdqS2XdJLVDsx410cIvUPyr6+3IRNokct4OEUISCivhgANIVB1zRNvGZ2QVIOcM+lOCQEc6PCrRiKkEojXOKsEDPBSrLInc3jAMLKqX22lk7metxkzsSZtvUeXPtD/EJvgyWSfN1SKnLHkvy0xZKKITuVhrkPLas4jjGlFB/rUSGKm9cLrJZqsXhFilzaZxtvKT86Q4GHdiO/6yijsD1nTUpmvUYzHhoXJ/A3dRg2WrIIB01GokqbHdVPEy3nmGILWG/mVIzXpKZuQD5o/yd/jlA054/sNQ54NR8PDhai6gtsodeY34jMALCqaZ2ZoHQhlTMvfzp04m7D6w/nkQ+2JlMK09C7QdPBO2rR8L4cVwaQgSNeDY8juGMasjk52w50P75D/d4h9Gdp+c/ChjKMh0/Lu+h2J9c1NAd1hWRTkk93S81Jcop0ZcDHXnIwHM3e9zSyfuiQfizGtJmyjYuEFZljCmkbSSOOgyabssh61CnGX8vt40jYPUzXuzv0OVCHeuaPgsoPBmsK67wEHIsmMdKoLtG6V002zzQBYspGv4IM4xqcxrfjAiWXcyhK87Ox5vPW2KGAki149OugNattYbZYixI+ZEyEQSkegG5nqbxiMjzcersIluSo3TuNLg/Ul4+qFpcmeAg+u7vpMxFCOchekdZRgg1ZTASiGIJ0tFAUw5vZerVoYW5yi1jTTGCGol3vNj10B48KGANIQZc9kwZ2k/pPbGGLmNGJxLmM2bQTqfmw141MsThnOFvDGqNQ4kaXxrVqi9Xb7PD4WXAym/1WGZwXUnIdapKRQBjQM0P06Q4UjQspbg+V0+x9B+SkFatkNZxOFuYWNoHxzsvDyWzLKbaO0nBu2TpKMGTLMvB/y+MFKRMXekjW4r7NhgUvKCJJNp3L5IuBTNknboycop1gGHsRrSPyc2Jvy/V5NCjBJCnE+w5J1w5avBhIMrrJ3IQ0Mufdk25iiRQhd9+9j8uz3I009XGQGPTkTowI3XuUVwpMhtPeAokHOIhaRqv3Q7nWE080KOYHlfE8fpzGIDGApV90aVg6Ng9n+4shAh0R3XI9HZZvdduZTkP0Yj/a2XVBLzWDePUhGGGyDhiM13NDrKyFZe+t7e1QKskJwKoCs7+IEzVg1oWLIdjmhCzRlJOZyeiGXWY8xYgV07jsZ2VaBZUAyVYiXQRCop0j3tQ9qp2zIZnJ5i+GNHrZm5bL6lK4CA8vO9Ee1V3aGmS59ej9EsaGBwsRo/Ws/Gva47UmWmsLExUdVtFAvatFpMgghf9gdsQCY6mKZhrh/fdp4WssvgcDvl6oVZuuSP7Nhw0xhIRHfTk5nVeiPICp3t/++PYsO0qsef9i1+2pqdkojh3HlRE3S7Fqbt8Pg+Bpnp8d8tL3Rh8xkVon3fhpEtMU4fw6JSHkebZ2WbB1EhvmUqT6aCJcENVN47KOBfw0+2S90bbnfkAdTihPag7FYgyc5IS7m5K2ec/xXCJ5mpS0ksgqb1MsAjr1lwZfnm4axr//+JxQSfcptnYhNYNujMCrAMGI1d6T2YqvcML0Or99pftEuvL+Gc+xi9QV4kHtxJpIuk7VcNTjnlNroej3T/V4o5O6LSg9havp8/7tAXJMDWSJtTNeI2OicD/77FlV22/Gu9d5fOvBZ9hF6mCw5tLB4LNdo73JxAdLgKYD6jKxpHxb7NAXUI5ZO4aUCyeNTKJA5g0EW4fKdM7SFg0Hhr4Ie+RhdUfaZdEFZS29M51cOjRFo33rqH8LWcXQQfc1L4XkbVodsVNmvdku/5Z8KzL5M8YRkYhtzp7+xeXQdSyKdJKcCRptYZCWl7M7UVnQY52JI1++Rvjphv4PpVtrJzeNaCg7EpY4XJBcBq0HW2mZvhYa268J0wJBJUoIJxD7YZd3Pwk2BTuciy6ZZui9f1UtNcblZJ9CWcsaEEkOam7PHbFEzYi+fKaEZCE26jks+E5ZJQ2INDzMV3Fz1DTuXwmT5K5J7Zz9oH2+fXQ5A+KMMruLmnb1fzjvBGZkJxNpDzrCOOUvHeFtSrlf3UzdFKKDriO6Cw3c9FQhko12kzGvLe3/XcZGxkEhiPltmEMhCkeEKIadQcKx+UZLJd1neCwTxPpJkpdA1Am2vDFUI73VV7zDsk9UOCXgwjE2pLodrVifV0pPSMnATS/laHyPC9Ap6U7Kkg1KT80RUXGv6ErOxlUTM8flGZsf3y0ZQ0FQefLRVbITKiPyo6fkbG2eyDAlDsqXmE5jgqEmP7RdVYRBnA0h7MjxwGeFRb3JSZWP4ZkT7Bj//CxpV5DwJzTa8ejINuSNQ2BbeV86WBaIPiNoGv/+Zsm5SOowkiYrG0RfO+AK6ia+mTIxZNslmmj3zVO3ulRDIIZDQ7rfZHlAvNegp/ApGUPa+tWN7b+S5tNMV0Fii13sYmMDrCYSVKLdpWFI5iR0Y/nJTx55kLmpnqDoxi2oIBkYSuVpgKBuzD+BP4kzNIqmnMTEEPsIMwO001RKxNA5Isxv8dUjXkP1nHn7IjYsmZ+X1a0oD8PuFmmYH/ODjtqr9jJFCBAUrexeRWlymlEUGtHXOi/VG0qu2c7b2rIhjk7IFGClUprMe4yM6A88FD5MlaGVdqTkRWpHzc7kWBKGZxR9qXpVOx5JQ9bSIFOEvi3zIxytlCctyzk0N/Tls6ds1+1IzSWnmkxnMMQ0DH4dL5cSp10RZHQaH4/bfzC/hCeRfKmbiBwY0hlXNGMJpEOhLFs+dCf95sdj881L25k4eYTuOC9JRjrjivoYclUmDSdDeK4btH2fhMyCu4ksbCe0UJS1ljpGaQbNCpRtrn1bZQ5E6SEYxTJsZBKkCXO7wlsu/MVBfIJQHTaDJk5WOkMhSJKkLy20500rhPTcicN6FrQjQzW4bYtBN+Pt5tVmqOO7VvI0mmJnZuy8IXjUh3jcU/jKCXPULNXGhoAfuLaczxXJMEgeeaDecamONhqufEAgj3pEznkZmdwRLjDgNzKOrWBwxAAtcXxXnc5dUyQbGxLkcFnofvTke86ZVcg4rSuRtOSestqI/S35kAIDfvCRmjkpeq7KJt3YYG/k6SqUi9VcMT8CNB3LLHocOKFLpld1U8JSWvvinXE/CqoNEmyLCxZB2tkD4Czxqnrsb5oejyOpz+T9KNqvKfYwXaqGcTrmOI029vLps9Wy6FWYnSYUUKSngXhRvTBXSq3Qdl3XtpueVa2nz40jyD4cXpmcoRBnXsYNU9JU/elM8uBl0clElhBTImzHJZRYnUgypuIqi0yBVWllYNMjnC3qFjNSAidxFpvgJ/fbctcwPATt9Bl/dYju9EhVlwmPUbSTtqQWjbF+0nxV+RvFORoyRsuzAJ7XtN0gaMeVq8jm+HRuRr+bjz2PX9GOhi/Vcpz0EGjNSEXEZK12e8nXQwNNXPpm9EtB1Ytr0qgTmwpoScWH5siT1hRChHF8yOoHF3xo9wffL504EzLjaUo8K2FTETsSv6zUKG8p0YOQzzB1ipxYe0A50tZN2/2YX2qG/9HI1dKskwDF7CdEc7m6zZuvAMDdAguLvAkFKqB0uuoKRgrB7FZ3/EkFdqFynrpinakM6g03I0fISVo/+gsPQ843zOauM9+S4uh+aGSk1fNjBvv3kFn+0tOqc/2fMidqfSyfBnW4BSLr1MK0G5XgtJuqDLHbaednLEGxsaLC0mJViG5+Z0puJyokm/IshQwyM17svFpqyiXIcaNggcpcjKuwhUmKdsoiG3mf9UDQPo1QSZqBprMAX5lqYuNOiBTXJU1Xkaa0WLM4BPHiNAANhIn5WtKlT2omk1fqFplzokWK3/CyHNnDIZ8Py9ykrG2NwJbnzKqum5A6Fm8zwzrjSaeiJw4rLPqRIdNILwJ0g3TcpEHj3KWRNWwsZS+nw1OGR0nY1JMrT7I5jbbbVMZcr9rxOstszaNHyad4PphNJuianzqbKvJct+klBlq3eNDLnaeicBqk0yqhHE+SOGqhkDQoy43944fZAIWvMCzNksRmpg2BDSoZS/BnvqORDCqFL8GIkaoZsOhSMTwzlghI899QEOfNnRYFOZ/2cOBuN1JEMmKJdBPTE/yw0009/FU4xALtHDNLxhLprW3Z9tgEeBmPIvdjG8pYucXiRGrMdFmCRI/V+x9OfxcHMS+WqtsdK02QBk1ZenZb6SeXI1QoEKpa9xRBNnhawF/oB7aXyLttaT1bYtquTHBEt6najCXCbJAQBHLq9Cn84qpes6wiJJAeUAa5iOZotYkTlmYq/yQFcPIzyI1SipBCalXU680gEL8kyMEcXFZ575ZZhBTZ/QqVneXmNS8a5bVCGe3MJXhUL3NEx0Hy83KLkMLJJPkxOYBfzliYDUhXkiShSeGnkzoBslCqZOnMh/CDZoaLqVq2K80YS1CWoz4NoBmT1ljajLGarhuQ1pPfaDQckqCXqaj4fpA2RXY3hrMtU//pb8KBoJ9eM5VC6SPFn8BhK4DzmD6Vm/kIjt8OMFWP7NEmqWi9lJtg/E9wnEbD99uYL4H7JKHwhRdeeOGFF1544YUXXnjhhRdeeOGFF174/4X/Aj7WVjht2TbpAAAAAElFTkSuQmCC"
                alt="SQL Server"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">SQL Server</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.mysql.com/common/logos/logo-mysql-170x115.png"
                alt="MySQL"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">MySQL</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.postgresql.org/media/img/about/press/elephant.png"
                alt="PostgreSQL"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">PostgreSQL</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://nextjs.org/static/favicon/favicon-32x32.png"
                alt="Next.js"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Next.js</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.svgrepo.com/show/349342/docker.svg"
                alt="Docker"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Docker</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="data:image/png;base64,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"
                alt="Kubernetes"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Kubernetes</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="data:image/png;base64,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"
                alt="Terraform"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Terraform</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">TypeScript</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                alt="C#"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">C#</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"
                alt="Rust"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Rust</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                alt="Python"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Python</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://static.djangoproject.com/img/logos/django-logo-negative.png"
                alt="Django"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Django</p>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Programming Languages</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JavaScript"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">JavaScript</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                alt="TypeScript"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">TypeScript</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                alt="Python"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Python</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
                alt="C#"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">C#</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.vectorlogo.zone/logos/java/java-ar21.svg"
                alt="Java"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Java</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"
                alt="Rust"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Rust</p>
            </div>

            <div className="flex flex-col items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg"
                alt="Bash"
                className="h-16 object-contain"
              />
              <p className="mt-2 text-sm font-medium">Bash</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}
