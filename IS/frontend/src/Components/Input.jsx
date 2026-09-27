function   Input ({label, type= "text", value, onChange, placeholder}) {
    return(
        <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
                {label}
            </label>
            <input
                type={type}
                value={value}   
                onChange={onChange}
                className="
                w-full
                border
                border-gray-300
                px-3
                py-2
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "
             />
        </div>
    )

}
    export default Input;