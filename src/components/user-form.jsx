export default function UserForm() {
    return (
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Datos del Usuario</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="border p-2 rounded" placeholder="Nombre" />
          <input type="text" className="border p-2 rounded" placeholder="Apellido" />
          <div className="flex flex-col">
            <label className="text-sm mb-1">Correo</label>
            <input type="email" className="border p-2 rounded" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm mb-1">Contraseña</label>
            <input type="password" className="border p-2 rounded" />
          </div>
          <input type="text" className="col-span-2 border p-2 rounded" placeholder="Dirección" />
          <input type="text" className="col-span-2 border p-2 rounded" placeholder="Referencia" />
          <input type="text" className="border p-2 rounded" placeholder="Comuna" />
          <select className="border p-2 rounded">
            <option>Elige una región</option>
            <option>Región Metropolitana</option>
            <option>Valparaíso</option>
            <option>Biobío</option>
          </select>
          <div className="col-span-2">
            <label className="text-sm block mb-2">Género</label>
            <div className="flex gap-4">
              <label><input type="radio" name="gender" defaultChecked /> Femenino</label>
              <label><input type="radio" name="gender" /> Masculino</label>
              <label><input type="radio" name="gender" /> Otro</label>
            </div>
          </div>
          <div className="col-span-2 text-center mt-4">
            <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    );
  }
  